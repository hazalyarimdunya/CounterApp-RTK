import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, selectCount, reset } from './counterSlice';



export default function Counter(){
    const count = useSelector(selectCount);//redux state degerini okumak icin kullanilacak.
    const dispatch  = useDispatch();//action gondermek icin kullanilacak.
    const [amount, setAmaunt] = useState(2);

    const addAmount = Number(amount) || 0;//eğer amount a number atanmamissa 0 ata.

    return(
        <div>
            <h2>Counter : {count}</h2> 
            <div>
                {/* butonlara tiklandiginda dispatch ile ilgili action gonderilecek. */}
                <button onClick={()=> dispatch(decrement()) }>Azalt</button>
                <button onClick={()=> dispatch(increment()) }>Arttir</button>
                <button onClick={()=> dispatch(reset()) }>Sifirla</button>
            </div>
            <div>
                <input value={amount} onChange={(e) => setAmaunt(e.target.value)} />
                <button onClick={()=> dispatch(incrementByAmount(addAmount)) }>Miktar Ekle</button>

            </div>
            
        </div>
    );
}
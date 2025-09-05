import {createSlice} from '@reduxjs/toolkit';


//redux state in baslangic degeri
const initialState ={
    value : 0
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        //Immer, JavaScript’te immutable state yönetimini kolaylaştıran bir kütüphane, arkada calisir.
        increment(state){ //immer kutuphanesi sayesinde state in degerini direkt degistirebiliyoruz.
            state.value +=1;
        },
        decrement(state){
            state.value -=1;
        },
        incrementByAmount(state,action){
            state.value += action.payload;//gonderilecek ek veri, mesaj icerigi.
        },
        reset(state){
            state.value = 0;
        }
    }

});

export const{increment,decrement,incrementByAmount,reset} = counterSlice.actions;//action creatorlar.Componentlerde dispatch(increament()) gibi kullanilacak.
export default counterSlice.reducer;//reducer fonksiyonu. Store a aktarilacak.

export const selectCount = (state) => state.counter.value;//selector fonksiyonu. Componentlerde kullanilacak.Component’lerin store’daki veriyi direkt olarak almasını kolaylaştırır.

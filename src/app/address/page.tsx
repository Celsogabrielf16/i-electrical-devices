'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState<Address[]>([]);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    type Address = {
        id: number;
        name: string;
        number: number;
    }

    useEffect(() => {
      const defaultData = [
        { id: 1, name: 'Olympus Mons', number: '6958' },
        { id: 2, name: 'Valles Marineris', number: '5678' },
        { id: 3, name: 'Utopia Planitia', number: '9101' }
      ];
  
      const storedData = localStorage.getItem('data');
      const data = storedData ? JSON.parse(storedData) : defaultData;
  
      if (!storedData)
        localStorage.setItem('data', JSON.stringify(defaultData));

      setData(data);

    }, [name, number]);
    
    const saveDataToLocalStorage = () => {
        const storedData = localStorage.getItem('data');
        let dataArray = storedData ? JSON.parse(storedData) : [];
        
        const idNewData = dataArray[dataArray.length - 1].id + 1;
        const data = { id: idNewData, name: name, number: number };
        dataArray.push(data);

        localStorage.setItem('data', JSON.stringify(dataArray));

        setName('');
        setNumber('');
      };
    
      const handleClick = () => {
        saveDataToLocalStorage();
      };

    return (
        <main className="flex flex-col relative w-screen overflow-x-hidden  gap-[32px] row-start-2 items-center pt-23 px-10 pb-10 md:pb-32">
            <Image src="/assets/mars.png" alt="Mars" priority className="absolute w-25 sm:w-30 md:w-50 lg:w-70 xl:w-90 2xl:w-130 -left-15 md:-left-20 lg:-left-40 xl:-left-50 top-20" width={600} height={600} quality={100}/>
            <Image src="/assets/earth.png" alt="Earth" priority className="absolute w-25 sm:w-30 md:w-50 lg:w-70 xl:w-90 2xl:w-130 -right-15 md:-right-20 lg:-right-40 xl:-right-50 top-60 sm:top-120 lg:top-100 xl:top-60" width={600} height={600} quality={100}/>
            <div className="flex flex-col xl:flex-row w-min items-center text-center gap-10 xl:gap-20 mt-10 xl:mt-32">
                <div className="flex flex-col xl:text-left gap-4 my-auto">
                    <h1 className="sm:text-2xl md:text-3xl w-70 sm:w-130 mx-auto">Cadastre seu endereço marciano e prepare-se para o futuro!</h1>
                    <p className="md:w-130 mx-auto text-xs sm:text-sm md:text-base/7 text-gray-600">Seja um dos primeiros a garantir seu endereço interplanetário. Cadastre-se agora e facilite suas futuras entregas diretas da Terra para Marte!</p>
                </div>
                <div className="flex flex-col justify-center w-fit gap-2 sm:gap-4 p-4 sm:p-6 md:p-8 rounded-2xl align-middle border border-indigo-500">
                    <h3 className="w-60 sm:w-80 sm:text-xl mb-2 sm:mb-4">Cadastre um Endereço</h3>
                    <input type="text" className="w-60 sm:w-80 py-1 px-3 sm:p-3 text-sm sm:text-base border border-gray-400 rounded-2xl mx-auto  focus:text-indigo-500 focus:border-indigo-500 focus:outline focus:outline-indigo-500" placeholder="Nome" maxLength={20} value={name} onChange={(event) => setName(event.target.value)}/>
                    <input type="number" className="w-60 sm:w-80 py-1 px-3 sm:p-3 text-sm sm:text-base border border-gray-400 rounded-2xl mx-auto focus:text-indigo-500 focus:border-indigo-500 focus:outline focus:outline-indigo-500" placeholder="Lote Marciano" value={number} onChange={(event) => { event.target.value.length <= 4 ? setNumber(event.target.value) : '' }}/>
                    <p className="bg-indigo-500 w-60 sm:w-80 py-1 sm:py-3 text-sm sm:text-base rounded-2xl text-white font-light mx-auto cursor-pointer" onClick={handleClick}>Cadastrar</p>
                </div>
            </div>
            <div className="flex flex-col mt-6 sm:mt-10 md:mt-32 text-center gap-4 md:gap-8">
                <h1 className="sm:text-xl md:text-3xl w-200 mx-auto">Endereços Cadastrados</h1>
                <p className="w-70 md:w-130 lg:w-200 mx-auto text-xs sm:text-sm md:text-base/7 text-gray-600">Confira abaixo os endereços interplanetários já cadastrados para o delivery de dispositivos eletrônicos. A entrega será feita diretamente no local de armazenamento em Marte!</p>
            </div>
            <div className="flex flex-col md:mt-12 gap-4 md:gap-8">
                {data.map((item, index) => (
                    <div key={item.id} className="flex w-70 md:w-120 text-center rounded-2xl align-middle border border-indigo-500 mx-auto">
                        <Image src="/assets/pin.png" alt="CPU" className="w-12 md:w-25 m-3 md:m-6" width={100} height={100} quality={100}/>
                        <div className="flex flex-col justify-between text-left gap-2 md:gap-4 my-auto">
                            <h1 className="text-sm md:text-xl font-medium">{item.name}</h1>
                            <p className="text-sm md:text-base">{item.number}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
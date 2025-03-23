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
        { id: 1, name: 'Alpha', number: '1234' },
        { id: 2, name: 'Buri', number: '5678' },
        { id: 3, name: 'Campinas', number: '9101' }
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
        <main className="grid grid-row-[1fr_1fr] gap-[32px] row-start-2 items-center pt-23 px-10 pb-20">
            <Image src="/assets/mars.png" alt="Mars" priority className="absolute -left-50 top-20" width={600} height={600} quality={100}/>
            <Image src="/assets/earth.png" alt="Earth" priority className="absolute -right-50 top-60" width={600} height={600} quality={100}/>
            <div className="flex w-min text-center gap-20 mt-32">
                <div className="flex flex-col text-left gap-4 my-auto">
                    <h1 className="text-3xl w-130 mx-auto">Cadastre seu endereço marciano e prepare-se para o futuro!</h1>
                    <p className="w-130 mx-auto text-base/7 text-gray-600">Seja um dos primeiros a garantir seu endereço interplanetário. Cadastre-se agora e facilite suas futuras entregas diretas da Terra para Marte!</p>
                </div>
                <div className="flex flex-col justify-center w-fit gap-4 p-8 rounded-2xl align-middle border border-indigo-500">
                    <h3 className="w-80 text-xl mb-4">Cadastre um Endereço</h3>
                    <input type="text" className="w-80 p-3 border border-gray-400 rounded-2xl mx-auto  focus:text-indigo-500 focus:border-indigo-500 focus:outline focus:outline-indigo-500" placeholder="Nome" maxLength={20} value={name} onChange={(event) => setName(event.target.value)}/>
                    <input type="number" className="w-80 p-3 border border-gray-400 rounded-2xl mx-auto focus:text-indigo-500 focus:border-indigo-500 focus:outline focus:outline-indigo-500" placeholder="Lote Marciano" value={number} onChange={(event) => { event.target.value.length <= 4 ? setNumber(event.target.value) : '' }}/>
                    <p className="bg-indigo-500 w-80 py-3 rounded-2xl text-white font-light mx-auto cursor-pointer" onClick={handleClick}>Cadastrar</p>
                </div>
            </div>
            <div className="flex flex-col mt-32 text-center gap-8">
                <h1 className="text-3xl w-200 mx-auto">Endereços Cadastrados</h1>
                <p className="w-190 mx-auto text-base/7">Confira abaixo os endereços interplanetários já cadastrados para o delivery de dispositivos eletrônicos. A entrega será feita diretamente no local de armazenamento em Marte!</p>
            </div>
            <div className="flex flex-col mt-12 gap-8">
                {data.map((item, index) => (
                    <div key={item.id} className="flex w-120 text-center rounded-2xl align-middle border border-indigo-500 mx-auto">
                        <Image src="/assets/pin.png" alt="CPU" className="m-6" width={100} height={100} quality={100}/>
                        <div className="flex flex-col text-left gap-4 my-auto">
                            <h1 className="text-xl font-medium">{item.name}</h1>
                            <p>{item.number}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
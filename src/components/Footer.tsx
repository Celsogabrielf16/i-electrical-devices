export default function Footer() {
  return (
    <footer className="w-full max-w-400 py-6 px-32">
        <div className="w-full h-[2px] bg-indigo-500"></div>
        <div className="grid grid-cols-[50%_25%_25%] p-8">
            <div className="flex flex-col gap-5">
                <h1 className="text-indigo-500 text-2xl">iElectricalDevices</h1>
                <p className="w-120">
                    Sistema de delivery interplanetário, implementado com Next.js, TypeScript e Tailwind, desenvolvido como projeto para o processo seletivo da vaga de Desenvolvedor Full-Stack Jr da Beyond the Bytes.
                </p>
            </div>
            <div className="flex flex-col gap-5">
                <h4 className="text-indigo-500 text-xl">Desenvolvedor</h4>
                <p>Celso Gabriel Prado</p>
            </div>
            <div className="flex flex-col gap-5">
                <h4 className="text-indigo-500 text-xl">
                    Usados no desenvolvimento
                </h4>
                <div className="flex flex-col gap-2">
                    <p>Figma</p>
                    <p>Blender</p>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="w-full max-w-360 py-3 px-10 xl:py-6 xl:px-32">
        <div className="w-full h-[2px] bg-indigo-500"></div>
        <div className="grid grid-cols-1 md:grid-cols-[50%_25%_25%] p-4 lg:p-8 text-xs xl:text-base gap-4">
            <div className="flex flex-col gap-1 md:gap-5">
                <h1 className="text-indigo-500 text-base xl:text-2xl">iElectricalDevices</h1>
                <p className="sm:w-60 md:w-80 lg:w-100 xl:w-120">
                    Sistema de delivery interplanetário, implementado com Next.js, TypeScript e Tailwind, desenvolvido como projeto para o processo seletivo da vaga de Desenvolvedor Full-Stack Jr da Beyond the Bytes.
                </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-5">
                <h4 className="text-indigo-500 text-sm xl:text-lg">Desenvolvedor</h4>
                <p>Celso Gabriel Prado</p>
            </div>
            <div className="flex flex-col gap-1 md:gap-5">
                <h4 className="text-indigo-500 text-sm xl:text-lg">
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

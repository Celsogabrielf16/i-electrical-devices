import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col relative w-screen overflow-x-hidden gap-[32px] row-start-2 items-center pt-23 px-32 pb-10 lg:pb-32">
      <Image src="/assets/mars.png" alt="Mars" priority className="absolute max-w-none w-30 md:w-60 lg:w-90 xl:w-120 2xl:w-150 -left-20 md:-left-40 lg:-left-50 top-60" width={600} height={600} quality={100}/>
      <Image src="/assets/earth.png" alt="Earth" priority className="absolute max-w-none w-30 md:w-60 lg:w-90 xl:w-120 2xl:w-150 -right-20 md:-right-40 lg:-right-50 top-20" width={600} height={600} quality={100}/>
      <div className="flex flex-col mt-10 lg:mt-32 text-center gap-4 md:gap-8">
          <p className="hidden md:block text-xs lg:text-sm">Transportamos dispositivos eletrônicos entre planetas com eficiência e segurança.</p>
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl w-80 sm:w-100 md:w-160 lg:w-200 mx-auto">Conectamos Marte e Terra com entregas rápidas e seguras.</h1>
          <p className="hidden md:block w-100 md:w-160 lg:w-180 mx-auto text-xs/5 lg:text-base/7">Contamos com uma frota avançada, protocolos de transporte espacial eficientes e um sistema de endereçamento inovador para que suas encomendas cheguem ao destino sem complicações. Seja um pioneiro da nova era logística!</p>
          <p className="w-80 md:hidden mx-auto text-xs/5">Seja um pioneiro da nova era logística!</p>
          <Link href="/address" className="bg-indigo-500 w-fit py-2 lg:py-4 px-4 lg:px-8 text-xs md:text-sm lg:text-base rounded-3xl text-white font-light mx-auto">Cadastre um endereço marciano</Link>
      </div>
      <div className="flex flex-col gap-16 mt-10 lg:mt-32 w-80 sm:w-120 lg:w-220 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-[20%_80%] gap-4 md:gap-8">
              <Image src="/assets/cpu.png" alt="CPU" className="w-20 sm:w-40 lg:w-50 mx-auto" width={200} height={200} quality={100}/>
              <div className="flex flex-col gap-2 md:gap-4 my-auto">
                  <h1 className="text:sm sm:text-lg lg:text-2xl font-medium">O Cérebro das Operações</h1>
                  <p className="hidden sm:block text-xs lg:text-sm/6">Milhares de CPUs de última geração já cruzaram o espaço para garantir o processamento de dados em Marte. Nossa logística interplanetária permite entregas confiáveis e seguras, impulsionando a evolução tecnológica da humanidade.</p>
                  <p className="sm:hidden text-xs lg:text-sm/6">Milhares de CPUs de última geração já cruzaram o espaço para garantir o processamento de dados em Marte.</p>
              </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[80%_20%] gap-4 md:gap-8">
              <Image src="/assets/gpu.png" alt="GPU" className="block lg:hidden w-20 sm:w-40 lg:w-50  mx-auto" width={200} height={200} quality={100}/>
              <div className="flex flex-col gap-2 md:gap-4 my-auto">
                  <h1 className="text:sm sm:text-lg lg:text-2xl font-medium">Potência Gráfica Além da Atmosfera</h1>
                  <p className="hidden sm:block text-xs lg:text-sm/6">Do processamento gráfico ao machine learning marciano, as GPUs enviadas por nós garantem desempenho extremo. Seja para pesquisa científica ou entretenimento, Marte nunca teve gráficos tão realistas!</p>
                  <p className="sm:hidden text-xs lg:text-sm/6">Do processamento gráfico ao machine learning marciano, as GPUs enviadas por nós garantem desempenho extremo.</p>
              </div>
              <Image src="/assets/gpu.png" alt="GPU" className="hidden lg:block w-40 lg:w-50" width={200} height={200} quality={100}/>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[20%_80%] gap-4 md:gap-8">
              <Image src="/assets/ram.png" alt="Memória RAM" className="w-20 sm:w-40 lg:w-50  mx-auto" width={200} height={200} quality={100}/>
              <div className="flex flex-col gap-2 md:gap-4 my-auto">
                  <h1 className="text:sm sm:text-lg lg:text-2xl font-medium">Velocidade para a Nova Fronteira</h1>
                  <p className="hidden sm:block text-xs lg:text-sm/6">Armazenamento rápido e confiável é essencial para qualquer missão. Com nosso transporte de memórias RAM, garantimos que Marte nunca fique sem desempenho e eficiência para suas operações.</p>
                  <p className="sm:hidden text-xs lg:text-sm/6">Armazenamento rápido e confiável é essencial para qualquer missão.</p>
              </div>
          </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-12 text-center mt-16 lg:mt-32">
          <h1 className="text-sm sm:text-lg lg:text-4xl/14 w-80 sm:w-120 lg:w-220 mx-auto">Pronto para enviar ou receber tecnologia interplanetária? Cadastre seu endereço!</h1>
          <Link href="/address" className="bg-indigo-500 w-fit py-2 px-6 lg:py-4 lg:px-8 rounded-3xl text-white font-light text-sm lg:text-base mx-auto">Cadastre um endereço marciano</Link>
      </div>
  </main>
  );
}

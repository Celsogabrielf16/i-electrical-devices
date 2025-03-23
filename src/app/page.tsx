import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-row-[1fr_1fr] gap-[32px] row-start-2 items-center pt-23 px-32 pb-32">
      <Image src="/assets/mars.png" alt="Mars" className="absolute -left-50 top-60" width={600} height={600} quality={100}/>
      <Image src="/assets/earth.png" alt="Earth" className="absolute -right-50 top-20" width={600} height={600} quality={100}/>
      <div className="flex flex-col mt-32 text-center gap-8">
          <p className="text-sm">Transportamos dispositivos eletrônicos entre planetas com eficiência e segurança.</p>
          <h1 className="text-5xl w-200 mx-auto">Conectamos Marte e Terra com entregas rápidas e seguras.</h1>
          <p className="w-180 mx-auto text-base/7">Contamos com uma frota avançada, protocolos de transporte espacial eficientes e um sistema de endereçamento inovador para que suas encomendas cheguem ao destino sem complicações. Seja um pioneiro da nova era logística!</p>
          <Link href="/address" className="bg-indigo-500 w-fit py-4 px-8 rounded-3xl text-white font-light mx-auto">Cadastre um endereço marciano</Link>
      </div>
      <div className="flex flex-col gap-16 mt-32">
          <div className="grid grid-cols-[20%_80%] w-220 text-center gap-8">
              <Image src="/assets/cpu.png" alt="CPU" width={200} height={200} quality={100}/>
              <div className="flex flex-col text-left gap-4 my-auto">
                  <h1 className="text-2xl font-medium">O Cérebro das Operações</h1>
                  <p className="text-sm/6">Milhares de CPUs de última geração já cruzaram o espaço para garantir o processamento de dados em Marte. Nossa logística interplanetária permite entregas confiáveis e seguras, impulsionando a evolução tecnológica da humanidade.</p>
              </div>
          </div>
          <div className="grid grid-cols-[80%_20%] w-220 text-center gap-8">
              <div className="flex flex-col text-left gap-4 my-auto">
                  <h1 className="text-2xl font-medium">Potência Gráfica Além da Atmosfera</h1>
                  <p className="text-sm/6">Do processamento gráfico ao machine learning marciano, as GPUs enviadas por nós garantem desempenho extremo. Seja para pesquisa científica ou entretenimento, Marte nunca teve gráficos tão realistas!</p>
              </div>
              <Image src="/assets/gpu.png" alt="GPU" width={200} height={200} quality={100}/>
          </div>
          <div className="grid grid-cols-[20%_80%] w-220 text-center gap-8">
              <Image src="/assets/ram.png" alt="Memória RAM" width={200} height={200} quality={100}/>
              <div className="flex flex-col text-left gap-4 my-auto">
                  <h1 className="text-2xl font-medium">Velocidade para a Nova Fronteira</h1>
                  <p className="text-sm/6">Armazenamento rápido e confiável é essencial para qualquer missão. Com nosso transporte de memórias RAM, garantimos que Marte nunca fique sem desempenho e eficiência para suas operações.</p>
              </div>
          </div>
      </div>
      <div className="flex flex-col gap-12 text-center mt-32">
          <h1 className="text-4xl/14 w-220 mx-auto">Pronto para enviar ou receber tecnologia interplanetária? Cadastre seu endereço!</h1>
          <Link href="/address" className="bg-indigo-500 w-fit py-4 px-8 rounded-3xl text-white font-light mx-auto">Cadastre um endereço marciano</Link>
      </div>
  </main>
  );
}

import Image from "next/image";

const LogoRow = () =>(
  <div>
  <Image className="mx-8 inline h-16" height={100} width={250} src="/looper/mavenlogo.png" alt="maven" />
  <Image className="mx-8 inline h-16" height={100} width={200} src="/looper/bootstraplogo.png" alt="bootstrap" />
  <Image className="mx-8 inline h-16" height={100} width={150} src="/looper/jpalogo.png" alt="jpa" />
  <Image className="mx-8 inline h-16" height={100} width={350} src="/looper/hibernatelogo.png" alt="hibernate" />
  <Image className="mx-8 inline h-32" height={100} width={200} src="/looper/jdbclogo.png" alt="jdbc" />
  <Image className="mx-8 inline h-16" height={100} width={150} src="/looper/gitlogo.png" alt="git" />
  <Image className="mx-8 inline h-16" height={100} width={200} src="/looper/githublogo.png" alt="github" />
  <Image className="mx-8 inline h-32" height={100} width={125} src="/looper/jsonlogo.png" alt="json" />
  <Image className="mx-8 inline h-32" height={100} width={130} src="/looper/nextlogo.png" alt="next" />
  <Image className="mx-8 inline h-32" height={100} width={350} src="/looper/postmanlogo.png" alt="postman" />
  <Image className="mx-8 inline h-32" height={100} width={150} src="/looper/phplogo.png" alt="php" />
  <Image className="mx-8 inline h-32" height={100} width={225} src="/looper/vslogo.png" alt="vs" />
  <Image className="mx-8 inline h-32" height={100} width={200} src="/looper/netbeanslogo.png" alt="netbeans" />
  </div>
)

const Looper = ({ isSpanish }) => {
  return (
    <section className="text-white pt-8 pb-4 bg-[#294a6b] rounded-lg">
      <h2 className="text-center text-2xl mb-2 font-bold leading-8 text-[#ffffff]">
        {isSpanish
          ? "Otras Tecnologías"
          : "Other Technologies"}
      </h2>

      <p className="text-center text-lg text-[#7291be] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-8">
        {isSpanish
          ? "Tecnologías, librerías, frameworks y programas que también he utilizado"
          : "Tecnologies, libraries, frameworks and programs i also utilized"}
      </p>

      <div className="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          <LogoRow/>
        </div>

        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          <LogoRow/>
        </div>
      </div>
    </section>
  )
}

export default Looper;
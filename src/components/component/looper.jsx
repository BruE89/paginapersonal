const Looper = ({ isSpanish }) => {
  return (
    <section className="bg-black text-white pt-8 pb-4 bg-[#294a6b]">
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
          <img className="mx-8 inline h-16" src="./looper/mavenlogo.png" alt="maven" />
          <img className="mx-8 inline h-16" src="./looper/bootstraplogo.png" alt="bootstrap" />
          <img className="mx-8 inline h-16" src="./looper/jpalogo.png" alt="jpa" />
          <img className="mx-8 inline h-16" src="./looper/hibernatelogo.png" alt="hibernate" />
          <img className="mx-8 inline h-32" src="./looper/jdbclogo.png" alt="jdbc" />
          <img className="mx-8 inline h-16" src="./looper/gitlogo.png" alt="git" />
          <img className="mx-8 inline h-16" src="./looper/githublogo.png" alt="github" />
          <img className="mx-8 inline h-32" src="./looper/jsonlogo.png" alt="json" />
          <img className="mx-8 inline h-32" src="./looper/nextlogo.png" alt="next" />
          <img className="mx-8 inline h-32" src="./looper/postmanlogo.png" alt="postman" />
          <img className="mx-8 inline h-32" src="./looper/phplogo.png" alt="php" />
          <img className="mx-8 inline h-32" src="./looper/vslogo.png" alt="vs" />
          <img className="mx-8 inline h-32" src="./looper/netbeanslogo.png" alt="netbeans" />


        </div>

        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          <img className="mx-8 inline h-16" src="./looper/mavenlogo.png" alt="maven" />
          <img className="mx-8 inline h-16" src="./looper/bootstraplogo.png" alt="bootstrap" />
          <img className="mx-8 inline h-16" src="./looper/jpalogo.png" alt="jpa" />
          <img className="mx-8 inline h-16" src="./looper/hibernatelogo.png" alt="hibernate" />
          <img className="mx-8 inline h-32" src="./looper/jdbclogo.png" alt="jdbc"/>
          <img className="mx-8 inline h-16" src="./looper/gitlogo.png" alt="git" />
          <img className="mx-8 inline h-16" src="./looper/githublogo.png" alt="github" />
          <img className="mx-8 inline h-32" src="./looper/jsonlogo.png" alt="json" />
          <img className="mx-8 inline h-32" src="./looper/nextlogo.png" alt="next" />
          <img className="mx-8 inline h-32" src="./looper/postmanlogo.png" alt="postman" />
          <img className="mx-8 inline h-32" src="./looper/phplogo.png" alt="php" />
          <img className="mx-8 inline h-32" src="./looper/vslogo.png" alt="vs" />
          <img className="mx-8 inline h-32" src="./looper/netbeanslogo.png" alt="netbeans" />


        </div>
      </div>
    </section>
  )
}

export default Looper;
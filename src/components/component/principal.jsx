"use client";

import { useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import ParticleBackground from "@/components/component/particles";
import SkillCard from "./skillcard";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BoxReveal from "@/components/magicui/box-reveal";

import { FaSlack as SlackIcon, FaGithub as GithubIcon,
   FaLinkedin as LinkedinIcon, FaWhatsapp as WhatsappIcon } from 'react-icons/fa';
import DownloadCV from "./cv";
import Looper from "./looper";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export function Principal() {
  // Parte que maneja el botón traductor
  const [isSpanish, setIsSpanish] = useState(true);
  const handleLanguageToggle = () => {
    setIsSpanish(!isSpanish);
  };
  // Parte que maneja el envio de datos del submit del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await axios.post("/api/send-email", formData);
      if (response.status === 200) {
        alert(
          isSpanish ? "Correo enviado exitosamente" : "Email sent successfully"
        );
      }
    } catch (error) {
      console.error("Error sending email:", {
      });
      alert(isSpanish ? "Error al enviar el correo" : "Error sending email");
    }
  };

  return (
    // Fondo de seccion principal // Color de texto NavBar y boton de CV
    <div className="flex flex-col min-h-[100vh] bg-[#294a6b] text-[#ffffff]">
      {/*Sección NavBar-------------------------------------------------------------------------------------------------------------*/}
      <header className="fixed top-0 left-0 w-full px-4 lg:px-6 h-14 flex items-center bg-[#3d5a86] z-50 ">
        <div className="flex items-center gap-4">
          {/*Botón LinkedIn*/}
          <Link
            href="https://www.linkedin.com/in/brunoestala/"
            className="text-white hover:text-[#8b9297] transition-colors animate-fade-in-down"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          {/*Botón GitHub*/}
          <Link
            href="https://github.com/BruE89"
            className="text-white hover:text-[#8b9297] transition-colors animate-fade-in-down"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </Link>
          {/*Botón Slack*/}
          <Link
            href="https://bruno-estala.slack.com"
            className="text-white hover:text-[#8b9297] transition-colors animate-fade-in-down"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlackIcon className="h-8 w-8" />
            <span className="sr-only">Slack</span>
          </Link>
          {/*Botón Whatsapp*/}
          <Link
            href="https://wa.me/541154963756?text=Hola%20Bruno!"
            className="text-white hover:text-[#8b9297] transition-colors animate-fade-in-down"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon className="h-8 w-8" />
            <span className="sr-only">WhatsApp</span>
          </Link>
          {/*Botón Traductor*/}
          <Button
            className="animate-fade-in-down"
            onClick={handleLanguageToggle}
          >
            {isSpanish ? "Translate to English" : "Traducir al Español"}
          </Button>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <div className="block lg:hidden">
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#3d5a86] text-sm font-medium text-white hover:bg-[#0b2845] focus:outline-none">
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </MenuButton>
              </div>
              <MenuItems className="origin-top-right absolute right-4 mt-4 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none bg-[#3d5a86]">
                <div className="py-1 bg-white">
                  <MenuItem as={Fragment}>
                    <Link
                      href="#about"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline"
                      prefetch={false}
                    >
                      {isSpanish ? "Sobre mí" : "About"}
                    </Link>
                  </MenuItem>
                  <MenuItem as={Fragment}>
                    <Link
                      href="#skills"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline"
                      prefetch={false}
                    >
                      {isSpanish ? "Habilidades" : "Skills"}
                    </Link>
                  </MenuItem>
                  <MenuItem as={Fragment}>
                    <Link
                      href="#projects"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline"
                      prefetch={false}
                    >
                      {isSpanish ? "Proyectos" : "Projects"}
                    </Link>
                  </MenuItem>
                  <MenuItem as={Fragment}>
                    <Link
                      href="#contact"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline"
                      prefetch={false}
                    >
                      {isSpanish ? "Contacto" : "Contact"}
                    </Link>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
          <div className="hidden lg:flex gap-4 sm:gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4 text-white animate-fade-in-down"
              prefetch={false}
            >
              {isSpanish ? "Sobre mí" : "About"}
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:underline underline-offset-4 text-white animate-fade-in-down"
              prefetch={false}
            >
              {isSpanish ? "Habilidades" : "Skills"}
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4 text-white animate-fade-in-down"
              prefetch={false}
            >
              {isSpanish ? "Proyectos" : "Projects"}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4 text-white animate-fade-in-down"
              prefetch={false}
            >
              {isSpanish ? "Contacto" : "Contact"}
            </Link>
          </div>
        </nav>
      </header>

      {/*Sección Body---------------------------------------------------------------------------------------------------------------*/}
      <main className="flex-1">
        {/*Sección Sobre Mí---------------------------------------------------------------------------------------------------------*/}
        <section
          id="about"
          className="bg-custom-gradient w-full pt-20 pb-10 md:pt-24 md:pb-10 lg:pt-40 lg:pb-10"
        >
          <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#ffffff] animate-fade-in-left mb-10">
                <GradualSpacing
                  text={
                    isSpanish
                      ? "Hola, soy Bruno Estala"
                      : "Hi, I'm Bruno Estala"
                  }
                />
              </h1>
              <div className="text-[#ffffff] text-lg mt-4 whitespace-pre-line mb-10">
                <BoxReveal >
                  {isSpanish
                    ? `Soy un desarrollador Full Stack apasionado con una sólida experiencia en crear soluciones web innovadoras y eficientes.
                      Con habilidades en tecnologías modernas, combino un enfoque detallista en el backend con una visión creativa en el frontend. 
                      Siempre estoy listo para enfrentar nuevos desafíos y colaborar en equipos dinámicos para impulsar el éxito de proyectos tecnológicos.`
                    : `I am a passionate Full Stack developer with solid experience in creating innovative and efficient web solutions. 
                      With skills in modern technologies, I combine a detail-oriented approach in the backend with a creative vision in the frontend. 
                      I am always ready to face new challenges and collaborate with dynamic teams to drive the success of technological projects.`}
                </BoxReveal>
              </div>
              <BoxReveal>
                <DownloadCV isSpanish={isSpanish} />
              </BoxReveal>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                width="300"
                height="300"
                priority
                alt="Bruno Estala"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="container mx-auto ml-4 md:px-6 flex mt-28">
            <Image
              src="/argentinaprograma.png"
              width={50}
              height={41}
              alt="argentinaprograma"
              loading="lazy"
              className="object-contain"
            />
            <h3 className="ml-4 mt-2 font-mono font-bold text-xl text-[#ffffff7a]">
              Argentina Programa 4.0
            </h3>
            <div>
              <Image
                src="/cessilogo.png"
                width={120}
                height={41}
                alt="cessi"
                className="ml-10"
              />
            </div>
          </div>
        </section>
        {/*Sección Habilidades------------------------------------------------------------------------------------------------------*/}
        <section
          id="skills"
          className="relative w-full py-20 md:py-24 lg:py-32 bg-[#0b2845]"
        >
          <ParticleBackground
            id="particles1"
            className="absolute inset-0 w-full h-full"
          />
          <div className="relative container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#7291be]">
                  {isSpanish ? "Mis Habilidades" : "My Skills"}
                </h2>
                <p className="max-w-[700px] text-[#9dacc0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {isSpanish
                    ? "Tengo una amplia gama de habilidades en el desarrollo de software, incluyendo Java, JavaScript y React."
                    : "I have a wide range of skills in software development, including Java, JavaScript, and React."}
                </p>
              </div>
            </div>
            {/*contenedor principal de la sección de logos*/}
            <div className="relative mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12 text-center">
              <SkillCard
                logo="/habilidades/javalogo.png"
                linkEsp="https://es.wikipedia.org/wiki/Java_(lenguaje_de_programación)"
                linkIng="https://en.wikipedia.org/wiki/Java_(programming_language)"
                isSpanish={isSpanish}
                title="Java"
                description={
                  isSpanish
                    ? "He desarrollado aplicaciones backend robustas y escalables utilizando Java, aplicando conceptos de programación orientada a objetos y patrones de diseño."
                    : "I have developed robust and scalable backend applications using Java, applying object-oriented programming concepts and design patterns."
                }
              />
              <SkillCard
                logo="/habilidades/mysqllogo.png"
                linkEsp="https://es.wikipedia.org/wiki/MySQL"
                linkIng="https://en.wikipedia.org/wiki/MySQL"
                isSpanish={isSpanish}
                title="MySQL"
                description={
                  isSpanish
                    ? "He gestionado bases de datos relacionales con MySQL, realizando consultas complejas y optimizando el rendimiento de las mismas."
                    : "I have managed relational databases with MySQL, performing complex queries and optimizing their performance."
                }
              />
              <SkillCard
                logo="/habilidades/springbootlogo.png"
                linkEsp="https://es.wikipedia.org/wiki/Spring_Framework"
                linkIng="https://en.wikipedia.org/wiki/Spring_Framework"
                isSpanish={isSpanish}
                title="Spring Boot"
                description={
                  isSpanish
                    ? "He desarrollado microservicios y APIs RESTful con Spring Boot, integrando soluciones de seguridad y manejo de datos."
                    : "I have developed microservices and RESTful APIs with Spring Boot, integrating security solutions and data handling."
                }
              />
              <SkillCard
                logo="/habilidades/jslogo.png"
                linkEsp="https://es.wikipedia.org/wiki/JavaScript"
                linkIng="https://en.wikipedia.org/wiki/JavaScript"
                isSpanish={isSpanish}
                title="JavaScript"
                description={
                  isSpanish
                    ? "He creado aplicaciones frontend interactivas y dinámicas con JavaScript, manejando funcionalidades asíncronas y manipulación del DOM."
                    : "I have created interactive and dynamic frontend applications with JavaScript, handling asynchronous functionalities and DOM manipulation."
                }
              />
              <SkillCard
                logo="/habilidades/reactlogo.png"
                linkEsp="https://es.wikipedia.org/wiki/React"
                linkIng="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
                isSpanish={isSpanish}
                title="React"
                description={
                  isSpanish
                    ? "He construido interfaces de usuario eficientes y reutilizables con React, utilizando hooks y context API para la gestión del estado y la lógica de los componentes."
                    : "I have built efficient and reusable user interfaces with React, utilizing hooks and context API for state management and component logic."
                }
              />
              <SkillCard
                logo="/habilidades/nodelogo.png"
                linkEsp="https://es.wikipedia.org/wiki/Node.js"
                linkIng="https://en.wikipedia.org/wiki/Node.js"
                isSpanish={isSpanish}
                title="NodeJs"
                description={
                  isSpanish
                    ? "He creado servidores eficientes y escalables con Node.js, manejando el procesamiento asíncrono y la gestión de paquetes con npm."
                    : "I have created efficient and scalable servers with Node.js, handling asynchronous processing and package management with npm."
                }
              />
              <SkillCard
                logo="/habilidades/htmllogo.png"
                linkEsp="https://es.wikipedia.org/wiki/HTML"
                linkIng="https://en.wikipedia.org/wiki/HTML"
                isSpanish={isSpanish}
                title="HTML"
                description={
                  isSpanish
                    ? "He diseñado y estructurado contenido web semántico y accesible utilizando HTML, asegurando una base sólida para el desarrollo web."
                    : "I have designed and structured semantic and accessible web content using HTML, ensuring a solid foundation for web development."
                }
              />
              <SkillCard
                logo="/habilidades/csslogo.png"
                linkEsp="https://es.wikipedia.org/wiki/CSS"
                linkIng="https://en.wikipedia.org/wiki/CSS"
                isSpanish={isSpanish}
                title="CSS"
                description={
                  isSpanish
                    ? "He estilizado páginas web con CSS, creando diseños responsivos y atractivos que mejoran la experiencia del usuario."
                    : "I have styled web pages with CSS, creating responsive and attractive designs that enhance the user experience."
                }
              />
              <SkillCard
                logo="/habilidades/tailwindlogo.png"
                linkEsp="https://es.wikipedia.org/wiki/Tailwind_CSS"
                linkIng="https://en.wikipedia.org/wiki/Tailwind_CSS"
                isSpanish={isSpanish}
                title="Tailwind"
                description={
                  isSpanish
                    ? "He utilizado Tailwind CSS para crear interfaces de usuario consistentes y bien diseñadas, aplicando clases utilitarias para un desarrollo rápido y eficiente."
                    : "I have used Tailwind CSS to create consistent and well-designed user interfaces, applying utility classes for rapid and efficient development."
                }
              />
            </div>
            {/*Looper de la sección de tecnologías*/}
            <div className="relative">
              <Looper isSpanish={isSpanish} />
            </div>
          </div>
        </section>
        {/*Sección Proyectos--------------------------------------------------------------------------------------------------------*/}
        <section id="projects" className="w-full py-20 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#ffffff]">
                  {isSpanish ? "Mis Proyectos" : "My Projects"}
                </h2>
                <p className="max-w-[700px] text-[#9dacc0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {isSpanish
                    ? "Echa un vistazo a algunos de los proyectos en los que he trabajado."
                    : "Check out some of the projects I've worked on."}
                </p>
              </div>
            </div>
            {/*Contenedor 1*/}
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4 justify-center">
                  <h3 className="font-bold text-[#7291be] text-3xl">Vet App</h3>
                  <p className="text-[#ffffff]">
                    {isSpanish
                      ? "Una aplicación desarrollada con Java, SQL y Spring. Maneja pedidos HTTP y guarda información en una base de datos mediante una API"
                      : "An App developed using Java, SQL and Spring. It manages HTTP requests and stores information on a database through an API"}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/BruE89/vetapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shadow-md h-8 items-center justify-center rounded-md border border-[#cdd4da] bg-[#f0f4f881] px-4 text-sm font-medium transition-colors hover:bg-[#e9ecef] hover:text-[#4b6a9b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center shadow-2xl">
                <Image
                  src="/spring_app.png"
                  width="550"
                  height="310"
                  alt="Todo App"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
            {/*Contenedor 2*/}
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex justify-center shadow-2xl">
                <Image
                  src="/presupuesto.png"
                  width="550"
                  height="310"
                  alt="Weather App"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4">
                  <h3 className="font-bold text-[#7291be] text-3xl">
                    Presupuestos App
                  </h3>
                  <p className="text-[#ffffff]">
                    {isSpanish
                      ? "Aplicación encargada de llevar un seguimiento de presupuestos, límites, categorías, gastos y descripciones"
                      : "An application responsible for tracking budgets, limits, categories, expenses, and descriptions."}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="https://presupuestosb.netlify.app/"
                      target="_blank"
                      className="inline-flex shadow-md h-8 items-center justify-center rounded-md bg-[#4b6a9b] px-4 text-sm font-medium text-white transition-colors hover:bg-[#0b2845] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      {isSpanish ? "Demo en vivo" : "Live Demo"}
                    </Link>
                    <Link
                      href="https://github.com/BruE89/presupuestoapp"
                      target="_blank"
                      className="inline-flex shadow-md h-8 items-center justify-center rounded-md border border-[#cdd4da] bg-[#f0f4f881] px-4 text-sm font-medium transition-colors hover:bg-[#e9ecef] hover:text-[#4b6a9b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Contenedor 3*/}
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4 justify-center">
                  <h3 className="font-bold text-[#7291be] text-3xl">
                    Tareas App
                  </h3>
                  <p className="text-[#ffffff]">
                    {isSpanish
                      ? "Lista de tareas interactiva, desarrollada con JavaScript, React y Vite"
                      : "To-do interactive list, developed using JavaScript, React and Vite"}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="https://listatareasbruno.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shadow-md h-8 items-center justify-center rounded-md bg-[#4b6a9b] px-4 text-sm font-medium text-white transition-colors hover:bg-[#0b2845] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      {isSpanish ? "Demo en vivo" : "Live Demo"}
                    </Link>
                    <Link
                      href="https://github.com/BruE89/tareasapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shadow-md h-8 items-center justify-center rounded-md border border-[#cdd4da] bg-[#f0f4f881] px-4 text-sm font-medium transition-colors hover:bg-[#e9ecef] hover:text-[#4b6a9b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/tareasapp.png"
                  width="550"
                  height="310"
                  alt="Todo App"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full brightness-95"
                />
              </div>
            </div>
            {/*Contenedor 4*/}
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex justify-center shadow-2xl">
                <Image
                  src="/ahorcado.png"
                  width="550"
                  height="310"
                  alt="Weather App"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4">
                  <h3 className="font-bold text-[#7291be] text-3xl">
                    Ahorcado
                  </h3>
                  <p className="text-[#ffffff]">
                    {isSpanish
                      ? "Juego simple de adivinar la palabra secreta, en español, desarrollado con TypeScript, React y Vite"
                      : "Simple guess-the-word game, in spanish only, developed using TypeScript, React and Vite"}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="https://ahorcadoappgame.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shadow-md h-8 items-center justify-center rounded-md bg-[#4b6a9b] px-4 text-sm font-medium text-white transition-colors hover:bg-[#0b2845] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      {isSpanish ? "Demo en vivo" : "Live Demo"}
                    </Link>
                    <Link
                      href="https://github.com/BruE89/ahorcadoapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shadow-md h-8 items-center justify-center rounded-md border border-[#cdd4da] bg-[#f0f4f881] px-4 text-sm font-medium transition-colors hover:bg-[#e9ecef] hover:text-[#4b6a9b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Contenedor 5*/}
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4 justify-center">
                  <h3 className="font-bold text-[#7291be] text-3xl">
                    Mis Ejercicios
                  </h3>
                  <p className="text-[#ffffff]">
                    {isSpanish
                      ? "Biblioteca de ejercicios varios, realizados durante las clases de Argentina Programa 4.0"
                      : "Library of various exercises, completed during the Argentina Programa 4.0 classes"}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/BruE89/Ejercicios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shadow-md h-8 items-center justify-center rounded-md border border-[#cdd4da] bg-[#f0f4f881] px-4 text-sm font-medium transition-colors hover:bg-[#e9ecef] hover:text-[#4b6a9b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center shadow-2xl">
                <Image
                  src="/ejercicios.png"
                  width="550"
                  height="310"
                  alt="Todo App"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full brightness-95"
                />
              </div>
            </div>
          </div>
        </section>
        {/*Sección Contacto---------------------------------------------------------------------------------------------------------*/}
        <section
          id="contact"
          className="relative w-full py-12 md:py-24 lg:py-32 bg-[#0b2845]"
        >
          <ParticleBackground
            id="particles2"
            className="absolute inset-0 w-full h-full"
          />
          <div className="relative container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#7291be]">
                  {isSpanish ? "Ponte en Contacto" : "Get in Touch"}
                </h2>
                <p className="max-w-[700px] text-[#9dacc0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {isSpanish
                    ? "No dudes en comunicarte conmigo si tienes alguna pregunta o si te gustar\u00EDa colaborar en un proyecto."
                    : "Feel free to reach out to me if you have any questions or would like to collaborate on a project."}
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form
                  data-netlify-recaptcha="true"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-2"
                >
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={isSpanish ? "Nombre" : "Name"}
                    className="max-w-lg flex-1 text-[#000000]"
                  />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={
                      isSpanish ? "Correo electr\u00F3nico" : "Email"
                    }
                    className="max-w-lg flex-1 text-[#000000]"
                  />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={isSpanish ? "Mensaje" : "Message"}
                    className="max-w-lg flex-1 text-[#000000]"
                  />
                  <Button
                    type="submit"
                    className="bg-[#4b6a9b] text-white hover:bg-[#3d5a86] w-full"
                  >
                    {isSpanish ? "Enviar" : "Submit"}
                  </Button>
                  <div data-netlify-recaptcha="true" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*Sección Footer-------------------------------------------------------------------------------------------------------------*/}
      <footer className="bg-[#3d5a86] text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Bruno Estala.{" "}
            {isSpanish
              ? "Todos los derechos reservados."
              : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
}
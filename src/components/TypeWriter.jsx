import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <h1 className="sm:text-8xl text-4xl text-dark dark:text-light font-serif">
      <Typewriter
        options={{
          strings: [
            "Hello!",
            "Hei!",
            "Hola!",
            "Hallo!",
            "Salut!",
            "Hej!",
            "Aloha!",
            "Kamusta!",
            "Bonjour!",
            "Cześć!",
            "Ciao!",
            "Olá!",
            "Ahoj!",
            "Namaste!",
            "Salaam!",
            "Szia!",
            "Merhaba!",
            "Sveiki!",
            "Konnichiwa!",
            "Nǐ hǎo!",
            "Annyeonghaseyo!",
            "Sawasdee!",
            "Guten Tag!",
            "Shalom!",
            "Yassou!",
          ],
          autoStart: true,
          loop: true,
          pauseFor: 1000,
        }}
      />
    </h1>
  );
};

export default TypeWriter;

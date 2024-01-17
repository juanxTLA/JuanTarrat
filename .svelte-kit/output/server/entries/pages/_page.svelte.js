import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-betweeen gap-4 items-end" data-svelte-h="svelte-o55gl8"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="z-4">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Assessing activity of IoT Smart Stuff using Inertial Sensors",
      icon: "fa-solid fa-mug-saucer",
      description: "Master's thesis project in which a smart mug was developed to detect and classify drinking activity using inertial sensors. The project was developed using <strong class='text-violet-400'>C++</strong> and involved embedded development using the Arduino IDE and the ESP32 and Teensy LC microcontrollers. A home server installed in a Raspberry Pi was also used to store and send data wirelessly via <strong class='text-violet-400'>MQTT</strong> Protocol. <strong class='text-violet-400'>MATLAB</strong> was used for plotting results and data analysis.",
      href: "https://www.proquest.com/docview/2890518872"
    },
    {
      name: "Multilayer Perceptron",
      icon: "fa-solid fa-brain",
      description: "Development of a multilayer perceptron in <strong class='text-violet-400'>Python</strong> without the use of any machine learning libraries. The project involved the development of a <strong class='text-violet-400'>backpropagation</strong> algorithm to train the network and the use of <strong class='text-violet-400'>gradient descent</strong> to optimize the network's weights. The project was developed as part of the Deep Learning course at the University of Alabama in Huntsville.",
      href: "https://github.com/juanxTLA/mulltilayer-perceptron"
    },
    {
      name: "Continuous Galerkin Method, a CUDA Implementation",
      icon: "fa-solid fa-subscript",
      description: "Implementation of a <strong class='text-violet-400'>CUDA</strong> version of the Continuous Galerkin Method for solving 1D boundary problems. The project compared a <strong class='text-violet-400'>C++</strong> implementation of the method with a <strong class='text-violet-400'>CUDA</strong> implementation. Demonstrated an reduction in execution time of 300x for the maximum number of elements tested (11,000). The project was developed as part of the General Purpose GPU Computing course at the University of Alabama in Huntsville.",
      href: "https://github.com/juanxTLA/Gen-Purpose-GPU-Programming/tree/main/FiniteElementMethod"
    }
  ];
  let benefits = [
    {
      metric: "10x",
      name: "an excellent problem solver",
      description: "I am a natural problem solver, leveraging my analytical skills to dissect challenges and find effective solutions. My creativity allows me to approach issues from various perspectives, uncovering innovative paths to resolution. With a persistent and adaptable mindset, I thrive in problem-solving situations, consistently turning obstacles into opportunities for success."
    },
    {
      name: "an embedded systems lover",
      description: "As a dedicated enthusiast of embedded systems, my specialization in this field during my master's program has equipped me with a profound understanding of the seamless integration of hardware and software. Proficient in microcontroller architectures and real-time constraints, I channel this expertise to craft efficient solutions. "
    },
    {
      name: "an excellent time manager",
      description: "I am a proficient time manager, combining organizational skills with strategic planning and adaptability. Prioritizing tasks and maintaining a disciplined approach, I ensure efficiency and productivity. My ability to navigate deadlines and commitments reflects a consistent focus on effective task completion and goal attainment."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-38n7yh"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! I&#39;m <span class="poppins text-violet-400">Juan</span> Tarrat
                <br>M.S in Computer
                <span class="poppins text-violet-400">Engineering</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="text-violet-400">favorite tech</span> includes C, C++, Python, Embedded Systems, Verilog, Machine Learning</p> <a href="https://www.linkedin.com/in/juan-tarrat-a9b29119a/" target="_blank"><button class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch →</h4></button></a></div> <div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", "images/profile.jpg", 0)} alt="Zetane Engine" class="object-cover z-[2] max-h-[70vh]"></div> </section> <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-1x4kl47"><h6 class="text-large sm:text-xl md:text-2xl">A few of my projects.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p><!-- HTML_TAG_START -->${steps[0].description}<!-- HTML_TAG_END --></p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p><!-- HTML_TAG_START -->${steps[1].description}<!-- HTML_TAG_END --></p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p><!-- HTML_TAG_START -->${steps[2].description}<!-- HTML_TAG_END --></p>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"> <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-1v5l3ql"><h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1q8im4p">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return ` <div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <h5${add_attribute("class", " text-2xl sm:text-3xl font-semibold text-center poppins ", 0)} data-svelte-h="svelte-11psba3">The <span class="text-violet-400">Complete</span> Package</h5>  <h5${add_attribute("class", " text-2xl sm:text-3xl font-semibold text-center poppins ", 0)} data-svelte-h="svelte-jlhrik">So why not invest?</h5></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

<script>
    import Step from "./Step.svelte";

    let steps = [
        {
            name: "Assessing activity of IoT Smart Stuff using Inertial Sensors",
            icon: "fa-solid fa-mug-saucer",
            description:
                "Master's thesis project in which a smart mug was developed to detect and classify drinking activity using inertial sensors. The project was developed using <strong class='text-violet-400'>C++</strong> and involved embedded development using the Arduino IDE and the ESP32 and Teensy LC microcontrollers. A home server installed in a Raspberry Pi was also used to store and send data wirelessly via <strong class='text-violet-400'>MQTT</strong> Protocol. <strong class='text-violet-400'>MATLAB</strong> was used for plotting results and data analysis.",
            href: "https://www.proquest.com/docview/2890518872" 
        },
        {
            name: "Multilayer Perceptron",
            icon: "fa-solid fa-brain",
            description:
                "Development of a multilayer perceptron in <strong class='text-violet-400'>Python</strong> without the use of any machine learning libraries. The project involved the development of a <strong class='text-violet-400'>backpropagation</strong> algorithm to train the network and the use of <strong class='text-violet-400'>gradient descent</strong> to optimize the network's weights. The project was developed as part of the Deep Learning course at the University of Alabama in Huntsville.",
            href: "https://github.com/juanxTLA/mulltilayer-perceptron"
        },
        {
            name: "Continuous Galerkin Method, a CUDA Implementation",
            icon: "fa-solid fa-subscript",
            description:
            "Implementation of a <strong class='text-violet-400'>CUDA</strong> version of the Continuous Galerkin Method for solving 1D boundary problems. The project compared a <strong class='text-violet-400'>C++</strong> implementation of the method with a <strong class='text-violet-400'>CUDA</strong> implementation. Demonstrated an reduction in execution time of 300x for the maximum number of elements tested (11,000). The project was developed as part of the General Purpose GPU Computing course at the University of Alabama in Huntsville.",
            href:"https://github.com/juanxTLA/Gen-Purpose-GPU-Programming/tree/main/FiniteElementMethod"
        },
    ];

    let benefits = [
        {
            metric: "10x",
            name: "an excellent problem solver",
            description:
                "I am a natural problem solver, leveraging my analytical skills to dissect challenges and find effective solutions. My creativity allows me to approach issues from various perspectives, uncovering innovative paths to resolution. With a persistent and adaptable mindset, I thrive in problem-solving situations, consistently turning obstacles into opportunities for success.",
        },
        {
            name: "an embedded systems lover",
            description:
                "As a dedicated enthusiast of embedded systems, my specialization in this field during my master's program has equipped me with a profound understanding of the seamless integration of hardware and software. Proficient in microcontroller architectures and real-time constraints, I channel this expertise to craft efficient solutions. ",
        },
        {
            name: "an excellent time manager",
            description:
                "I am a proficient time manager, combining organizational skills with strategic planning and adaptability. Prioritizing tasks and maintaining a disciplined approach, I ensure efficiency and productivity. My ability to navigate deadlines and commitments reflects a consistent focus on effective task completion and goal attainment.",
        },
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Juan</span> Tarrat
                <br />M.S in Computer
                <span class="poppins text-violet-400">Engineering</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400"> favorite tech</span> includes C, C++, Python, Embedded Systems, Verilog, Machine Learning
            </p>
            <a href="https://www.linkedin.com/in/juan-tarrat-a9b29119a/" target="_blank">
                <button
                    class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
                >
                    <div
                        class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                    />
                    <h4 class="relative z-9">Get in touch &rarr;</h4>
                </button>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"images/profile.jpg"}
                alt="Zetane Engine"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div>
        <!-- <div  class="flex p-0.5 relative max-w-[700px] w-full mx-auto">
            <div
                class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
            >
                <div
                    class="bg-gradient-to-r absolute inset-[-20px]  from-violet-800 to-indigo-800 specialSpin"
                />
            </div>

            <img
                src={"images/zetane-engine.jpeg"}
                alt="Zetane Engine"
                class="w-full h-full object-cover z-[2]"
            />
        </div> -->
    </section>
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my projects.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violet-400">see</span> my work?
            </h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    {@html steps[0].description}
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    {@html steps[1].description}
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    {@html steps[2].description}
                </p>
            </Step>

    </section>
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <!-- <div class="flex flex-col gap-2 mx-auto">
                    <div class="flex items-end gap-4">
                        <p
                            class="poppins text-6xl sm:text-7xl md:text-8xl text-slate-500 font-medium"
                        >
                            {benefit.metric}
                        </p>
                        <p
                            class="text-xl sm:text-2xl md:text-3xl capitalize pb-2"
                        >
                            {benefit.name}
                        </p>
                    </div>
                    <p class="text-center italic">- {benefit.description}</p>
                </div> -->
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
            The <span class="text-violet-400">Complete</span> Package
        </h5>
        <!-- <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>Scroll to see more &rarr;</p>
        </div> -->
        <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>So why not invest?</h5>
    </section>
</main>

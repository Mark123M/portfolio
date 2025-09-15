export const allPosts = {
    general:
    {
        experiencePosts:
        [
            {
                title: "Electronic Arts (EA): Systems Software Engineer Intern",
                date: "May 2025 - Aug 2025",
                desc: "Systems-level audio memory debugger and telemetry tools for the Frostbite Game Engine",
                points: [
                    "Led the development of runtime memory debugger tools for the Frostbite Engine used by 60+ AAA games",
                    "Built an audio resource monitor using C++ to manage streamed and preloaded data for 5,000+ assets/level",
                    "Visualized cache address space by analyzing free list blocks to show fragmentation and health indicators",
                    "Implemented virtualized and LOD UI rendering with sparse updates to optimize data latency by ~90%",
                    "Reported misconfigured cache allocators that caused ∼4.6% audio memory overhead in BF6 and Skate levels"
                ],
                sources: [
                    ["/frostbite-3-engine.jpg", 0, "Frostbite Engine"],
                    ["/frostbite-game.jpg", 0, "Battlefield"],
                    ["/skate4.jpg", 0, "Skate 4"],
                ]
            },
            {
                title: "Waterloo Computer Graphics Lab: Research Assistant",
                date: "Feb 2025 - Present",
                desc: "Supervised by Professor Toshiya Hachisuka",
                points: [
                    "Implemented differential evolution algorithms on GPU with CUDA and PyTorch to optimize neural networks",
                    "Applied parallel model fusion for memory-bound AI workloads to improve throughput as per Nsight Compute",
                    "Researching real-time rendering algorithms for n-dimensional geometries using C++ and OpenGL with UofT"
                ],
                sources: [
                ]
            },
            {
                title: "Tactic Studios: Software Engineer Intern",
                date: "Sep 2024 - Dec 2024",
                desc: "Multiplayer gameplay and UI features for Killer Inn: a third-person shooter game in closed beta",
                points: [
                    "Implemented a grid-based inventory system in C++ with TCP network replication to sort and trade items",
                    "Optimized client-side hit registration algorithm using raycasts & collision layers to fix weapon no-clip exploit",
                    "Created multiplayer scoreboard with minimap indicators to visualize stats, clues, and spatial data on suspects",
                    "Built stat system calculations and localization tools and workflows for 2200+ text resource files",
                ],
                sources: [
                    ["https://www.youtube.com/embed/Jt_gaBXTwt8?si=vAHC9DWrG-YitAgN", 2, "Killer Inn"],
                    ["/bodyfound.jpg", 0, "Body found"],
                    ["/drone.jpg", 0, "Drone fight"],
                    ["/suspects.jpg", 0, "Suspects"],
                    ["/decrypt.jpg", 0, "Decrypt"]
                ]
            },
            {
                title: "AI Arena: Game Programmer Intern",
                date: "Jan 2024 - May 2024",
                desc: "Gameplay features and engine optimizations for AI Arena: A platform fighter game with imitation learning agents",
                points: [
                    "Constructed a utility AI system with Three.js and TypeScript to manage behavior trees for 8 opponent agents",
                    "Developed aerial dodge, grab, and throw via finite state machines, applying framedata & collision responses",
                    "Built a tutorial NPC with integrated input capture and sequencer tools to edit & replay 12 challenge solutions",
                    "Optimized asset pipeline by abstracting resource loading and disposal to fix WebGL memleaks of 4MB/match",
                ],
                sources: [
                    ["https://www.youtube.com/embed/xcXjY55xUVY?si=CNpcwYgSy0OYxcRS", 2, "AI Arena"],
                    ["/aiarena.webp", 0, "Promotional Art"],
                ]
            },
            {
                title: "eButterfly: Software Engineer Intern",
                date: "May 2023 – Sep 2023",
                desc: "A data-driven platform for collecting and analyzing butterfly distribution, phenology, and flight patterns",
                points: [
                    "Researched real-time geospatial heatmaps using Python and SQL for plotting 500k+ butterfly observations",
                    "Automated bulk data imports with Node.js and React to extract & validate CSV rows with database schemas",
                    "Implemented single sign-on (SSO) and automated post creation to connect discussion forum with main site for 4,000+ users",
                    "Created a taxonomy dashboard via recursive form components & lazy loading for 22,000+ butterfly species",
                ],
                sources: [
                    ["/heatmap.png", 0, "Geospatial Heatmap"],
                    ["/eb.png", 0, "eButterfly"],
                ]
            },
        ],
        projectPosts:
        [
            {
                title: "Raytracer",
                date: "",
                desc: "A monte carlo pathtracer for rendering and light transport simulations",
                points: [ // maybe talk about using transactions to validate and protect data for tree-based schemas
                    "Built a Monte Carlo raytracer using C++ to render 3D environments with light transport and BSDF models",
                    "Implemented an n-dimensional Halton sequence generator for sampling quasirandom values over light paths",
                    "Used multiple importance sampling with next event estimation on lights and materials to reduce image noise",
                ],
                sources: []
            },
            {
                title: "L-Mesh",
                date: "",
                desc: "A 3D procedural generation tool using stochastic and parametric l-systems for modelling complex structures",
                points: [ // maybe talk about using transactions to validate and protect data for tree-based schemas
                    "Implemented a parametric L-system interpreter with Three.js to compute and animate recursive 3D models",
                    "Built a model manager REST API via Node.js & SQL with transactions for operations on tree-based schemas",
                    "Developed a responsive formal language editor in React with error highlighting and 20 customizable presets",
                ],
                sources: [
                    ["/ash_tree.png", 0, "ash tree"],
                    ["/bush.png", 0, "bush"],
                    ["/flower_plant.png", 0, "flower plant"],
                    ["/weeping_willow.png", 0, "weeping willow"],
                    ["/koch_3.png", 0, "koch curve"]
                ]
            },
            {
                title: "Compiler for C-like language",
                date: "",
                desc: "A compiler for translating a subset of C++ features into MIPS machine language",
                points: [
                "Applied an SLR(1) bottom-up parsing algorithm to construct type-annotated parse trees for semantic analysis",
                "Implemented code generation for functions, control flow, and dynamic memory allocation with free lists",
                "Created loaders and static linkers with relocation algorithms to resolve external symbol exports and usage"
                ],
                sources: [
                ]
            },
            {
                title: "Chess Engine",
                date: "",
                desc: "A C++ chess engine built using OOP principles and MVC architecture",
                points: [
                "Created AI players using an alpha-beta searching algorithm with iterative deepening to evaluate new moves",
                "Developed a legal move generator with bit encoding to calculate and benchmark over 1.6M moves per sec",
                "Implemented an XWindow GUI using the observer pattern with customizable boards and 5 difficulty settings"
                ],
                sources: []
            },
            {
                title: "WeeklyMix",
                date: "",
                desc: "A social media app for musicians with user profiles, posts, authentication, media uploads, likes and follows",
                points: [
                    "Implemented a REST API using Node.js and MongoDB to facilitate content-sharing and user interactions",
                    "Implemented responsive web pages using React and Figma for discussion boards, user profiles, and logins",
                    "Managed user-uploaded media using AWS S3 and DCT compression to deliver up to 25GB of static files"
                ],
                sources: [
                    ["/discussions.png", 0, "discussions page"],
                    ["/profile.png", 0, "profile modal"],
                ]
            },
            {
                title: "ChatReminder",
                date: "",
                desc: "A Discord plugin for creating auto reminders for ghosted messages and manual reminders for important messages",
                points: [
                    "Developed and integrated custom modals, notifications, and context menus into Discord using JavaScript by patching native Webpack functions and intercepting DOM events",
                    "Implemented persistent reminder tracking by parsing messages into JSON format to saving into local files"
                ],
                sources: [
                    ["/chatreminder1.png", 0, "reminder context menu"],
                    ["/chatreminder2.png", 0, "reminder modal"],
                    ["/chatreminder3.png", 0, "reminder pop-ups"]
                ]
            },
            {
                title: "Astroship",
                date: "",
                desc: "A top-down space shooter game with physics-based weapons and enemies",
                points: [
                "Developed all game mechanics and art, including characters, controls, camera, combat, and environment",
                "Optimized C# memory usage by applying object pooling on factory classes to recycle game entities",
                "Batched component updates using an event queue by aggregating frequent particle and audio emitter calls"
                ],
                sources: [["/astroship.mp4", 1, "combat and ai"]]
            }

        ]
    }
}
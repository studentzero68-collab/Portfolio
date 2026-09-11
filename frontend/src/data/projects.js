const projects = [
    {
        id: 'tesla-ui-clone',
        title: 'Tesla UI Clone',
        description: 'A polished Tesla-inspired landing page focused on modern layout design and visual storytelling.',
        image: '/images/images (3).jpg',
        technologies: ['HTML', 'CSS', 'Responsive'],
        liveUrl: 'https://studentzero68-collab.github.io/Tesla-project-mukelani/',
        githubUrl: 'https://github.com/studentzero68-collab/Tesla-project-mukelani',
        featured: false,
        caseStudy: {
            overview: 'A responsive landing-page recreation focused on premium visual hierarchy and product storytelling.',
            problem: 'Create a confident, image-led interface that stays clear and usable across screen sizes.',
            approach: 'I studied the page structure section by section, then rebuilt the hero, product areas, spacing, and responsive behavior with CSS.',
            solution: 'A focused landing page using semantic HTML, responsive CSS, strong typography, and carefully paced sections.',
            tools: ['HTML', 'CSS'],
            challenges: 'Matching a premium brand feel with CSS while keeping the layout flexible on smaller screens.',
            lessons: 'Spacing, contrast, image cropping, and typography hierarchy have a major effect on perceived quality.',
            improvements: 'Add more project-specific imagery and refine the responsive transitions as the design evolves.',
            outcome: 'A polished UI exercise that strengthened my visual design and responsive layout practice.'
        }
    },
    {
        id: 'netflix-landing-page',
        title: 'Netflix Landing Page',
        description: 'A responsive Netflix-inspired page with strong visual identity and attention to layout and user flow.',
        image: '/images/Screenshot 2026-05-26 140856.png',
        technologies: ['HTML', 'CSS', 'Flexbox'],
        liveUrl: 'https://studentzero68-collab.github.io/Netflix/',
        githubUrl: 'https://github.com/studentzero68-collab/Netflix',
        featured: false,
        caseStudy: {
            overview: 'A dark, responsive landing-page study built around a strong streaming-brand visual language.',
            problem: 'Keep an image-heavy interface readable and easy to navigate across desktop and mobile layouts.',
            approach: 'I used flexbox for the main layout and tuned responsive breakpoints, contrast, spacing, and call-to-action hierarchy.',
            solution: 'A responsive page with clear sections, layered visual treatment, and a focused sign-up path.',
            tools: ['HTML', 'CSS'],
            challenges: 'Balancing dramatic visuals with readable content and consistent spacing at different widths.',
            lessons: 'Responsive layouts work best when structure and hierarchy are decided before decorative details.',
            improvements: 'Continue refining content responsiveness and replace any temporary visual assets with final project captures.',
            outcome: 'A stronger understanding of image-led layouts and responsive interface composition.'
        }
    },
    {
        id: 'todo-list-app',
        title: 'To-Do List App',
        description: 'A productivity app with filters, task states, and local persistence for everyday usability.',
        image: '/images/Screenshot 2026-05-21 142913.png',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
        liveUrl: 'https://studentzero68-collab.github.io/To-do-list/',
        githubUrl: 'https://github.com/studentzero68-collab/To-do-list',
        featured: true,
        caseStudy: {
            overview: 'A browser-based task manager where users can add, complete, filter, and remove everyday tasks.',
            problem: 'Make task state feel reliable while keeping the interface simple enough for repeated daily use.',
            approach: 'I represented tasks as JavaScript objects, connected DOM events to each action, and synced changes to localStorage.',
            solution: 'A functional task flow with filters, visible states, and persistence between browser sessions.',
            tools: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
            challenges: 'Keeping the rendered list and stored data synchronized after every task action.',
            lessons: 'State, events, and persistence need a clear data flow even in a small frontend application.',
            improvements: 'Add richer keyboard interactions and more detailed task organization features.',
            outcome: 'My first project where I handled interactive state and browser persistence with confidence.'
        }
    },
    {
        id: 'youtube-clone',
        title: 'YouTube Clone',
        description: 'A dynamic clone that pushed me to work with APIs, video content, and interactive components.',
        image: '/images/Screenshot 2026-06-15 110911.png',
        technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
        liveUrl: 'https://studentzero68-collab.github.io/Youtube-basic/',
        githubUrl: 'https://github.com/studentzero68-collab/Youtube-basic',
        featured: false,
        caseStudy: {
            overview: 'An API-driven video interface that moves beyond static cards and responds to external content.',
            problem: 'Fetch and display changing content while keeping loading, empty, and error states understandable.',
            approach: 'I used async JavaScript and fetch to map API responses into reusable interface elements.',
            solution: 'A dynamic clone with video-oriented content, interactive components, and basic request handling.',
            tools: ['HTML', 'CSS', 'JavaScript', 'API'],
            challenges: 'Working with asynchronous data and keeping the page useful when the external request changes.',
            lessons: 'API-driven interfaces need deliberate loading and failure states, not only a successful response.',
            improvements: 'Improve resilience around API limits and add more focused content discovery interactions.',
            outcome: 'My first meaningful step into API-driven frontend work.'
        }
    },
    {
        id: 'bakery-project',
        title: 'Bakery Project',
        description: 'A responsive bakery page with a warm visual identity and clear product and contact sections.',
        image: '/images/Screenshot 2026-07-06 084144.png',
        technologies: ['HTML', 'CSS', 'Flexbox'],
        liveUrl: 'https://studentzero68-collab.github.io/Bakery-project1/',
        githubUrl: 'https://github.com/studentzero68-collab/Bakery-project1.git',
        featured: false,
        caseStudy: {
            overview: 'A small-business website concept designed to make a bakery feel approachable, clear, and easy to browse.',
            problem: 'Balance product photography, menu information, about content, and contact details without clutter.',
            approach: 'I organized the experience into clear sections and used flexbox to create responsive content areas.',
            solution: 'A warm, responsive page with a defined brand feel and straightforward browsing flow.',
            tools: ['HTML', 'CSS'],
            challenges: 'Creating a welcoming visual rhythm while keeping the information structure practical.',
            lessons: 'Consistent spacing and a clear section order can make a small business site feel trustworthy.',
            improvements: 'Add more real product photography and a richer menu interaction when content is available.',
            outcome: 'A responsive layout exercise focused on branding, hierarchy, and usability.'
        }
    },
    {
        id: 'quiz-widget-project',
        title: 'Quiz Widget Project',
        description: 'A group project page with an interactive quiz flow and a strong visual identity.',
        image: '/images/Screenshot 2026-07-06 090005.png',
        technologies: ['HTML', 'CSS', 'Flexbox', 'JavaScript'],
        liveUrl: 'https://kmukendi10.github.io/quiz-widget-project/',
        githubUrl: 'https://github.com/KMukendi10/quiz-widget-project.git',
        featured: false,
        caseStudy: {
            overview: 'A collaborative quiz experience with question flow, score updates, and a clean result path.',
            problem: 'Keep questions, answers, score feedback, and retry behavior understandable from start to finish.',
            approach: 'Our group divided UI, logic, and styling work, then connected question data to JavaScript state changes.',
            solution: 'A widget-style quiz that updates answers and scores in real time and resets cleanly for another attempt.',
            tools: ['HTML', 'CSS', 'JavaScript'],
            challenges: 'Coordinating group contributions while keeping the interaction state consistent.',
            lessons: 'Planning state transitions early makes interactive widgets easier to extend and debug.',
            improvements: 'Add richer feedback and accessibility refinements for keyboard and screen-reader users.',
            outcome: 'A practical collaboration exercise that strengthened interactive UI and teamwork skills.'
        }
    },
    {
        id: 'ihub-prototype',
        title: 'Ihub Prototype Project',
        description: 'A group prototype with a community-focused visual identity and responsive content sections.',
        image: '/images/Screenshot 2026-07-06 093822.png',
        technologies: ['HTML', 'CSS', 'Flexbox', 'JavaScript'],
        liveUrl: 'https://giftmshengu250-pixel.github.io/Ihub-Prototype75/',
        githubUrl: 'https://github.com/giftmshengu250-pixel/Ihub-Prototype75.git',
        featured: false,
        caseStudy: {
            overview: 'A collaborative innovation-hub prototype designed to feel human, welcoming, and community-driven.',
            problem: 'Present people, events, and purpose in a way that feels more intentional than a generic template.',
            approach: 'We combined photography, testimonial-style content, and event sections, then refined the responsive layout together.',
            solution: 'A community-oriented prototype with a clear content rhythm and welcoming visual direction.',
            tools: ['HTML', 'CSS', 'JavaScript'],
            challenges: 'Aligning group feedback and keeping the experience cohesive across multiple content types.',
            lessons: 'Iteration and shared design decisions help a prototype communicate purpose, not just structure.',
            improvements: 'Add richer interactions and content management once the final information architecture is known.',
            outcome: 'A collaborative project that improved my responsive layout and group development practice.'
        }
    },
    {
        id: 'weather-app-react',
        title: 'Weather App React',
        description: 'A React weather experience with searchable cities, live API data, loading states, and error handling.',
        image: '/images/Screenshot 2026-05-26 140856.png',
        technologies: ['React', 'Vite', 'API', 'Hooks'],
        liveUrl: 'https://studentzero68-collab.github.io/weather-app-',
        githubUrl: 'https://github.com/studentzero68-collab/weather-app-react.git',
        featured: true,
        caseStudy: {
            overview: 'A React weather interface organized around search, live data, and clear request states.',
            problem: 'Make live weather data understandable while handling loading, success, and error states gracefully.',
            approach: 'I structured the app around a custom hook and component state for the current city and fetch lifecycle.',
            solution: 'A focused weather flow that separates data logic from presentation and keeps the user informed.',
            tools: ['React', 'Vite', 'JavaScript', 'API'],
            challenges: 'Managing asynchronous data without letting the interface become confusing during transitions.',
            lessons: 'Reusable hooks and clear component responsibilities make React data flows easier to reason about.',
            improvements: 'Improve the visual preview assets and expand the weather information shown after a search.',
            outcome: 'A project that strengthened my confidence in React state, hooks, and API integration.'
        }
    },
    {
        id: 'shopping-center',
        title: 'Shopping Center',
        description: 'A multi-page shopping experience with product discovery, shared cart state, filters, pagination, and checkout.',
        image: '/images/Screenshot 2026-05-26 140856.png',
        technologies: ['React', 'Context API', 'Router', 'Cart Logic'],
        liveUrl: 'https://studentzero68-collab.github.io/Shopping-clone/',
        githubUrl: 'https://github.com/studentzero68-collab/Shopping-clone.git',
        featured: false,
        caseStudy: {
            overview: 'A larger React shopping experience that connects product discovery, shared state, and checkout flow.',
            problem: 'Keep cart and product information consistent across navigation, filters, pagination, and checkout.',
            approach: 'I used context providers to share product and cart state, then connected the interface to product data and calculations.',
            solution: 'A multi-page store flow with search, category filtering, pagination, cart totals, VAT, and delivery calculations.',
            tools: ['React', 'Context API', 'Router'],
            challenges: 'Keeping shared state predictable while several screens depend on the same product and cart information.',
            lessons: 'Context and clear provider boundaries make shared React state easier to maintain.',
            improvements: 'Replace temporary preview imagery with a dedicated capture and continue refining checkout validation.',
            outcome: 'A substantial step forward in shared state, routing, and product-flow thinking.'
        }
    },
    {
        id: 'zero-capstone-project',
        title: 'Zero - Capstone Project',
        description: 'A full-stack accommodation platform concept with authentication, listings, and an admin dashboard.',
        image: '/images/Screenshot 2026-05-26 140856.png',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        liveUrl: '',
        githubUrl: 'https://github.com/studentzero68-collab',
        featured: false,
        caseStudy: {
            overview: 'An Airbnb-inspired full-stack accommodation platform concept with users, listings, and administrative workflows.',
            problem: 'Connect secure authentication, listing management, and a usable React product experience end to end.',
            approach: 'I worked across a React frontend and Express/MongoDB backend, using JWT concepts to separate protected actions.',
            solution: 'A full-stack product structure covering listing flows, authentication concerns, and an admin dashboard direction.',
            tools: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
            challenges: 'Moving from isolated frontend builds into coordinated API, data, and authentication responsibilities.',
            lessons: 'Secure routes, clear API boundaries, and data modeling are central to full-stack product work.',
            improvements: 'Complete and publish the final deployment and add the finished product screenshots when available.',
            outcome: 'A capstone that expanded my understanding of end-to-end application architecture.'
        }
    },
    {
        id: 'urban-threads',
        title: 'Urban Threads',
        description: 'A streetwear e-commerce app with Firebase Authentication, Firestore product data, filtering, and a login-gated cart.',
        image: '/images/Screenshot 2026-05-26 140856.png',
        technologies: ['JavaScript', 'Firebase', 'Firestore', 'Authentication'],
        liveUrl: '',
        githubUrl: 'https://github.com/studentzero68-collab',
        featured: false,
        caseStudy: {
            overview: 'A streetwear storefront concept connected to Firebase authentication and live Firestore product data.',
            problem: 'Deliver a responsive shopping flow where product data, filtering, authentication, and cart access work together.',
            approach: 'I connected Firestore product reads with filtering and placed cart actions behind Firebase Authentication.',
            solution: 'A storefront direction with live product data, category filtering, account recovery concerns, and a protected cart.',
            tools: ['JavaScript', 'Firebase', 'Firestore', 'Authentication'],
            challenges: 'Coordinating backend-as-a-service data, auth state, and shopping interactions without a custom server.',
            lessons: 'Firestore queries, authentication state, and security rules need to be designed as one system.',
            improvements: 'Publish the final demo and add the finished storefront screenshots when the project assets are ready.',
            outcome: 'A practical introduction to Firebase-backed product and authentication flows.'
        }
    }
];

export default projects;


export const routes = [
    {
        path: '/',
        component: () => import('@/pages/Home'),
        meta: {
            title: "MapDesigner - бесплатный онлайн конструктор карт и атласов",
            description: "Расскажите истории в Интернете, освещающие места, события или предметы. MapDesigner позволит быстро создавать гибкие карты и атласы для использования их в сфере обучения и туризма."
        }
    },
    {
        name: 'library',
        path: '/library',
        component: () => import('@/pages/Library'),
        meta: {
            middlewareAuth: true,
            title: "Библиотека карт и атласов - MapDesigner",
            description: "Создавайте, редактуруйте и делитесь созданными картами в библиотеке карт и атласов- MapDesigner."
        }
    },
    {
        name: 'constructor',
        path: '/constructor/:id?',
        component: () => import('@/pages/Constructor'),
        props: true,
        meta: {
            middlewareAuth: true,
            title: "MapDesigner - бесплатный онлайн конструктор карт и атласов",
            description: "Расскажите истории в Интернете, освещающие места, события или предметы. MapDesigner позволит быстро создавать гибкие карты и атласы для использования их в сфере обучения и туризма."
        }
    },
    {
        name: 'viewer',
        path: '/viewer/:id?',
        component: () => import('@/pages/Viewer'),
        props: true,
        meta: {
            middlewareAuth: true,
            title: "MapDesigner - бесплатный онлайн конструктор карт и атласов",
            description: "Расскажите истории в Интернете, освещающие места, события или предметы. MapDesigner позволит быстро создавать гибкие карты и атласы для использования их в сфере обучения и туризма."
        }
    },
    {
        name: 'example',
        path: '/example/:id',
        component: () => import('@/pages/Viewer'),
        props: true,
        meta: {
            title: "MapDesigner - бесплатный онлайн конструктор карт и атласов",
            description: "Расскажите истории в Интернете, освещающие места, события или предметы. MapDesigner позволит быстро создавать гибкие карты и атласы для использования их в сфере обучения и туризма."
        }
    },
    {
        path: '*',
        component: () => import('@/pages/page404'),
        meta: { title: "404 Not Found" }
    }
];

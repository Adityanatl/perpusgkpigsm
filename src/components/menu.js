export const menuItems = [
    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: "menuitems.dashboards.text",
        icon: "bx-home-circle",
        badge: {
            variant: "info",
            text: "menuitems.dashboards.badge"
        },
        subItems: [
            {
                id: 3,
                label: "menuitems.dashboards.list.default",
                link: "/",
                parentId: 2
            },
            {
                id: 4,
                label: "menuitems.dashboards.list.saas",
                link: "/dashboard/saas",
                parentId: 2
            },
            {
                id: 5,
                label: "menuitems.dashboards.list.crypto",
                link: "/dashboard/crypto",
                parentId: 2
            }
        ]
    },
    {
        id: 6,
        isLayout: true
    },
    {
        id: 7,
        label: "menuitems.apps.text",
        isTitle: true
    },
    {
        id: 271,
        label: "menuitems.gurucreator.text",
        icon: "bx-store",
        subItems: [
            {
                id: 272,
                label: "menuitems.gurucreator.list.strategic",
                link: "/strategic",
                parentId: 271
            },
            {
                id: 273,
                label: "menuitems.gurucreator.list.silabus",
                link: "/silabus",
                parentId: 271
            },
            {
                id: 274,
                label: "menuitems.gurucreator.list.rubrik",
                link: "/rubrik",
                parentId: 271
            },
            {
                id: 275,
                label: "menuitems.gurucreator.list.penilaian",
                link: "/penilaian",
                parentId: 271
            },
            {
                id: 276,
                label: "menuitems.gurucreator.list.lessonplan",
                link: "/lessonplan",
                parentId: 271
            },
        ]
    },
    {
        id: 281,
        label: "menuitems.master.text",
        icon: "bx-store",
        subItems: [
            {
                id: 282,
                label: "menuitems.master.list.files",
                link: "/files",
                parentId: 281
            },
            {
                id: 282,
                label: "menuitems.master.list.provinsi",
                link: "/provinsi",
                parentId: 281
            },
            {
                id: 283,
                label: "menuitems.master.list.city",
                link: "/city",
                parentId: 281
            },
            {
                id: 284,
                label: "menuitems.master.list.ki",
                link: "/ki",
                parentId: 281
            },
            {
                id: 285,
                label: "menuitems.master.list.kd",
                link: "/kd",
                parentId: 281
            },
            {
                id: 286,
                label: "menuitems.master.list.rumpun",
                link: "/rumpun",
                parentId: 281
            },
            {
                id: 287,
                label: "menuitems.master.list.mapel",
                link: "/mapel",
                parentId: 281
            },
            {
                id: 2871,
                label: "menuitems.master.list.materi",
                link: "/materi",
                parentId: 281
            },
            {
                id: 288,
                label: "menuitems.master.list.profil_pembelajaran",
                link: "/profil_pembelajaran",
                parentId: 281
            },
            {
                id: 289,
                label: "menuitems.master.list.domain_pembelajaran",
                link: "/domain_pembelajaran",
                parentId: 281
            },
            {
                id: 290,
                label: "menuitems.master.list.kunci_pembelajaran",
                link: "/kunci_pembelajaran",
                parentId: 281
            },
            // {
            //     id: 291,
            //     label: "menuitems.master.list.ruang_lingkup",
            //     link: "/ruang_lingkup",
            //     parentId: 281
            // },
            {
                id: 292,
                label: "menuitems.master.list.kompetensi",
                link: "/kompetensi",
                parentId: 281
            },
            {
                id: 293,
                label: "menuitems.master.list.tema",
                link: "/tema",
                parentId: 281
            },
            {
                id: 294,
                label: "menuitems.master.list.subtema",
                link: "/subtema",
                parentId: 281
            },
        ]
    },
    // {
    //     id: 8,
    //     label: "menuitems.calendar.text",
    //     icon: "bx-calendar",
    //     link: "/calendar"
    // },
    // {
    //     id: 9,
    //     label: "menuitems.chat.text",
    //     icon: "bx-chat",
    //     link: "/chat",
    //     badge: {
    //         variant: "success",
    //         text: "menuitems.chat.badge"
    //     }
    // },
    // {
    //     id: 10,
    //     label: "menuitems.ecommerce.text",
    //     icon: "bx-store",
    //     subItems: [
    //         {
    //             id: 11,
    //             label: "menuitems.ecommerce.list.products",
    //             link: "/ecommerce/products",
    //             parentId: 10
    //         },
    //         {
    //             id: 12,
    //             label: "menuitems.ecommerce.list.productdetail",
    //             link: "/ecommerce/product-detail/4",
    //             parentId: 10
    //         },
    //         {
    //             id: 13,
    //             label: "menuitems.ecommerce.list.orders",
    //             link: "/ecommerce/orders",
    //             parentId: 10
    //         },
    //         {
    //             id: 14,
    //             label: "menuitems.ecommerce.list.customers",
    //             link: "/ecommerce/customers",
    //             parentId: 10
    //         },
    //         {
    //             id: 15,
    //             label: "menuitems.ecommerce.list.cart",
    //             link: "/ecommerce/cart",
    //             parentId: 10
    //         },
    //         {
    //             id: 16,
    //             label: "menuitems.ecommerce.list.checkout",
    //             link: "/ecommerce/checkout",
    //             parentId: 10
    //         },
    //         {
    //             id: 17,
    //             label: "menuitems.ecommerce.list.shops",
    //             link: "/ecommerce/shops",
    //             parentId: 10
    //         },
    //         {
    //             id: 18,
    //             label: "menuitems.ecommerce.list.addproduct",
    //             link: "/ecommerce/add-product",
    //             parentId: 10
    //         }
    //     ]
    // },
    // {
    //     id: 19,
    //     label: "menuitems.crypto.text",
    //     icon: "bx-bitcoin",
    //     subItems: [
    //         {
    //             id: 20,
    //             label: "menuitems.crypto.list.wallet",
    //             link: "/crypto/wallet",
    //             parentId: 19
    //         },
    //         {
    //             id: 21,
    //             label: "menuitems.crypto.list.buy/sell",
    //             link: "/crypto/buy-sell",
    //             parentId: 19
    //         },
    //         {
    //             id: 22,
    //             label: "menuitems.crypto.list.exchange",
    //             link: "/crypto/exchange",
    //             parentId: 19
    //         },
    //         {
    //             id: 23,
    //             label: "menuitems.crypto.list.lending",
    //             link: "/crypto/lending",
    //             parentId: 19
    //         },
    //         {
    //             id: 24,
    //             label: "menuitems.crypto.list.orders",
    //             link: "/crypto/orders",
    //             parentId: 19
    //         },
    //         {
    //             id: 25,
    //             label: "menuitems.crypto.list.kycapplication",
    //             link: "/crypto/kyc-application",
    //             parentId: 19
    //         },
    //         {
    //             id: 26,
    //             label: "menuitems.crypto.list.icolanding",
    //             link: "/crypto/ico-landing",
    //             parentId: 19
    //         }
    //     ]
    // },
    // {
    //     id: 27,
    //     label: "menuitems.email.text",
    //     icon: "bx-envelope",
    //     subItems: [
    //         {
    //             id: 28,
    //             label: "menuitems.email.list.inbox",
    //             link: "/email/inbox",
    //             parentId: 27
    //         },
    //         {
    //             id: 29,
    //             label: "menuitems.email.list.reademail",
    //             link: "/email/reademail/1",
    //             parentId: 27
    //         }
    //     ]
    // },
    // {
    //     id: 30,
    //     label: "menuitems.invoices.text",
    //     icon: "bx-receipt",
    //     subItems: [
    //         {
    //             id: 31,
    //             label: "menuitems.invoices.list.invoicelist",
    //             link: "/invoices/list",
    //             parentId: 30
    //         },
    //         {
    //             id: 32,
    //             label: "menuitems.invoices.list.invoicedetail",
    //             link: "/invoices/detail",
    //             parentId: 30
    //         }
    //     ]
    // },
    // {
    //     id: 33,
    //     label: "menuitems.projects.text",
    //     icon: "bx-briefcase-alt-2",
    //     subItems: [
    //         {
    //             id: 34,
    //             label: "menuitems.projects.list.grid",
    //             link: "/projects/grid",
    //             parentId: 33
    //         },
    //         {
    //             id: 35,
    //             label: "menuitems.projects.list.projectlist",
    //             link: "/projects/list",
    //             parentId: 33
    //         },
    //         {
    //             id: 36,
    //             label: "menuitems.projects.list.overview",
    //             link: "/projects/overview",
    //             parentId: 33
    //         },
    //         {
    //             id: 37,
    //             label: "menuitems.projects.list.create",
    //             link: "/projects/create",
    //             parentId: 33
    //         }
    //     ]
    // },
    // {
    //     id: 38,
    //     label: "menuitems.tasks.text",
    //     icon: "bx-task",
    //     subItems: [
    //         {
    //             id: 39,
    //             label: "menuitems.tasks.list.tasklist",
    //             link: "/tasks/list",
    //             parentId: 38
    //         },
    //         {
    //             id: 40,
    //             label: "menuitems.tasks.list.kanban",
    //             link: "/tasks/kanban",
    //             parentId: 38
    //         },
    //         {
    //             id: 41,
    //             label: "menuitems.tasks.list.createtask",
    //             link: "/tasks/create",
    //             parentId: 38
    //         }
    //     ]
    // },
    // {
    //     id: 42,
    //     label: "menuitems.contacts.text",
    //     icon: "bxs-user-detail",
    //     subItems: [
    //         {
    //             id: 43,
    //             label: "menuitems.contacts.list.usergrid",
    //             link: "/contacts/grid",
    //             parentId: 42
    //         },
    //         {
    //             id: 44,
    //             label: "menuitems.contacts.list.userlist",
    //             link: "/contacts/list",
    //             parentId: 42
    //         },
    //         {
    //             id: 45,
    //             label: "menuitems.contacts.list.profile",
    //             link: "/contacts/profile",
    //             parentId: 42
    //         }
    //     ]
    // },
    // {
    //     id: 46,
    //     label: "menuitems.pages.text",
    //     isTitle: true
    // },
    // {
    //     id: 47,
    //     label: "menuitems.authentication.text",
    //     icon: "bx-user-circle",
    //     subItems: [
    //         {
    //             id: 48,
    //             label: "menuitems.authentication.list.login",
    //             link: "/auth/login-1",
    //             parentId: 47
    //         },
    //         {
    //             id: 49,
    //             label: "menuitems.authentication.list.register",
    //             link: "/auth/register-1",
    //             parentId: 47
    //         },
    //         {
    //             id: 50,
    //             label: "menuitems.authentication.list.recoverpwd",
    //             link: "/auth/recoverpwd",
    //             parentId: 47
    //         },
    //         {
    //             id: 51,
    //             label: "menuitems.authentication.list.lockscreen",
    //             link: "/auth/lock-screen",
    //             parentId: 47
    //         }
    //     ]
    // },
    // {
    //     id: 52,
    //     label: "menuitems.utility.text",
    //     icon: "bx-file",
    //     subItems: [
    //         {
    //             id: 53,
    //             label: "menuitems.utility.list.starter",
    //             link: "/pages/starter",
    //             parentId: 52
    //         },
    //         {
    //             id: 54,
    //             label: "menuitems.utility.list.maintenance",
    //             link: "/pages/maintenance",
    //             parentId: 52
    //         },
    //         {
    //             id: 55,
    //             label: "menuitems.utility.list.timeline",
    //             link: "/pages/timeline",
    //             parentId: 52
    //         },
    //         {
    //             id: 56,
    //             label: "menuitems.utility.list.faqs",
    //             link: "/pages/faqs",
    //             parentId: 52
    //         },
    //         {
    //             id: 57,
    //             label: "menuitems.utility.list.pricing",
    //             link: "/pages/pricing",
    //             parentId: 52
    //         },
    //         {
    //             id: 58,
    //             label: "menuitems.utility.list.error404",
    //             link: "/pages/404",
    //             parentId: 52
    //         },
    //         {
    //             id: 59,
    //             label: "menuitems.utility.list.error500",
    //             link: "/pages/500",
    //             parentId: 52
    //         }
    //     ]
    // },
    // {
    //     id: 60,
    //     label: "menuitems.components.text",
    //     isTitle: true
    // },
    // {
    //     id: 61,
    //     label: "menuitems.uielements.text",
    //     icon: "bx-tone",
    //     subItems: [
    //         {
    //             id: 62,
    //             label: "menuitems.uielements.list.alerts",
    //             link: "/ui/alerts",
    //             parentId: 61
    //         },
    //         {
    //             id: 63,
    //             label: "menuitems.uielements.list.buttons",
    //             link: "/ui/buttons",
    //             parentId: 61
    //         },
    //         {
    //             id: 64,
    //             label: "menuitems.uielements.list.cards",
    //             link: "/ui/cards",
    //             parentId: 61
    //         },
    //         {
    //             id: 65,
    //             label: "menuitems.uielements.list.carousel",
    //             link: "/ui/carousel",
    //             parentId: 61
    //         },
    //         {
    //             id: 66,
    //             label: "menuitems.uielements.list.dropdowns",
    //             link: "/ui/dropdowns",
    //             parentId: 61
    //         },
    //         {
    //             id: 67,
    //             label: "menuitems.uielements.list.grid",
    //             link: "/ui/grid",
    //             parentId: 61
    //         },
    //         {
    //             id: 68,
    //             label: "menuitems.uielements.list.images",
    //             link: "/ui/images",
    //             parentId: 61
    //         },
    //         {
    //             id: 69,
    //             label: "menuitems.uielements.list.modals",
    //             link: "/ui/modals",
    //             parentId: 61
    //         },
    //         {
    //             id: 70,
    //             label: "menuitems.uielements.list.rangeslider",
    //             link: "/ui/rangeslider",
    //             parentId: 61
    //         },
    //         {
    //             id: 71,
    //             label: "menuitems.uielements.list.progressbar",
    //             link: "/ui/progressbars",
    //             parentId: 61
    //         },
    //         {
    //             id: 72,
    //             label: "menuitems.uielements.list.sweetalert",
    //             link: "/ui/sweet-alert",
    //             parentId: 61
    //         },
    //         {
    //             id: 73,
    //             label: "menuitems.uielements.list.tabs",
    //             link: "/ui/tabs-accordions",
    //             parentId: 61
    //         },
    //         {
    //             id: 74,
    //             label: "menuitems.uielements.list.typography",
    //             link: "/ui/typography",
    //             parentId: 61
    //         },
    //         {
    //             id: 75,
    //             label: "menuitems.uielements.list.video",
    //             link: "/ui/video",
    //             parentId: 61
    //         },
    //         {
    //             id: 76,
    //             label: "menuitems.uielements.list.general",
    //             link: "/ui/general",
    //             parentId: 61
    //         },
    //         {
    //             id: 77,
    //             label: "menuitems.uielements.list.colors",
    //             link: "/ui/colors",
    //             parentId: 61
    //         },
    //         {
    //             id: 78,
    //             label: "menuitems.uielements.list.lightbox",
    //             link: "/ui/lightbox",
    //             parentId: 61
    //         },
    //         {
    //             id: 79,
    //             label: "menuitems.uielements.list.cropper",
    //             link: "/ui/image-cropper",
    //             parentId: 61
    //         }
    //     ]
    // },
    // {
    //     id: 79,
    //     label: "menuitems.forms.text",
    //     icon: "bxs-eraser",
    //     badge: {
    //         variant: "danger",
    //         text: 'menuitems.forms.badge'
    //     },
    //     subItems: [
    //         {
    //             id: 80,
    //             label: "menuitems.forms.list.elements",
    //             link: "/form/elements",
    //             parentId: 79
    //         },
    //         {
    //             id: 81,
    //             label: "menuitems.forms.list.layouts",
    //             link: "/form/layouts",
    //             parentId: 79
    //         },
    //         {
    //             id: 81,
    //             label: "menuitems.forms.list.validation",
    //             link: "/form/validation",
    //             parentId: 79
    //         },
    //         {
    //             id: 82,
    //             label: "menuitems.forms.list.advanced",
    //             link: "/form/advanced",
    //             parentId: 79
    //         },
    //         {
    //             id: 83,
    //             label: "menuitems.forms.list.editor",
    //             link: "/form/editor",
    //             parentId: 79
    //         },
    //         {
    //             id: 84,
    //             label: "menuitems.forms.list.fileupload",
    //             link: "/form/uploads",
    //             parentId: 79
    //         },
    //         {
    //             id: 85,
    //             label: "menuitems.forms.list.repeater",
    //             link: "/form/repeater",
    //             parentId: 79
    //         },
    //         {
    //             id: 86,
    //             label: "menuitems.forms.list.wizard",
    //             link: "/form/wizard",
    //             parentId: 79
    //         },
    //         {
    //             id: 87,
    //             label: "menuitems.forms.list.mask",
    //             link: "/form/mask",
    //             parentId: 79
    //         }
    //     ]
    // },
    // {
    //     id: 88,
    //     icon: "bx-list-ul",
    //     label: "menuitems.tables.text",
    //     subItems: [
    //         {
    //             id: 89,
    //             label: "menuitems.tables.list.basic",
    //             link: "/tables/basic",
    //             parentId: 88
    //         },
    //         {
    //             id: 90,
    //             label: "menuitems.tables.list.advanced",
    //             link: "/tables/advanced",
    //             parentId: 88
    //         }
    //     ]
    // },
    // {
    //     id: 91,
    //     icon: "bxs-bar-chart-alt-2",
    //     label: "menuitems.charts.text",
    //     subItems: [
    //         {
    //             id: 92,
    //             label: "menuitems.charts.list.apex",
    //             link: "/charts/apex",
    //             parentId: 91
    //         },
    //         {
    //             id: 93,
    //             label: "menuitems.charts.list.chartjs",
    //             link: "/charts/chartjs",
    //             parentId: 91
    //         },
    //         {
    //             id: 94,
    //             label: "menuitems.charts.list.chartist",
    //             link: "/charts/chartist",
    //             parentId: 91
    //         },
    //         {
    //             id: 95,
    //             label: "menuitems.charts.list.echart",
    //             link: "/charts/echart",
    //             parentId: 91
    //         }
    //     ]
    // },
    // {
    //     id: 96,
    //     label: "menuitems.icons.text",
    //     icon: "bx-aperture",
    //     subItems: [
    //         {
    //             id: 97,
    //             label: "menuitems.icons.list.boxicons",
    //             link: "/icons/boxicons",
    //             parentId: 96
    //         },
    //         {
    //             id: 98,
    //             label: "menuitems.icons.list.materialdesign",
    //             link: "/icons/materialdesign",
    //             parentId: 96
    //         },
    //         {
    //             id: 99,
    //             label: "menuitems.icons.list.dripicons",
    //             link: "/icons/dripicons",
    //             parentId: 96
    //         },
    //         {
    //             id: 100,
    //             label: "menuitems.icons.list.fontawesome",
    //             link: "/icons/fontawesome",
    //             parentId: 96
    //         }
    //     ]
    // },
    // {
    //     id: 101,
    //     label: "menuitems.maps.text",
    //     icon: "bx-map",
    //     subItems: [
    //         {
    //             id: 102,
    //             label: "menuitems.maps.list.googlemap",
    //             link: "/maps/google",
    //             parentId: 101
    //         },
    //         {
    //             id: 103,
    //             label: "menuitems.maps.list.leafletmap",
    //             link: "/maps/leaflet",
    //             parentId: 101
    //         },
    //     ]
    // },
    // {
    //     id: 104,
    //     label: "menuitems.multilevel.text",
    //     icon: "bx-share-alt",
    //     subItems: [
    //         {
    //             id: 105,
    //             label: "menuitems.multilevel.list.level1.1",
    //             link: "javascript: void(0);",
    //             parentId: 104
    //         },
    //         {
    //             id: 106,
    //             label: "menuitems.multilevel.list.level1.2",
    //             parentId: 104,
    //             subItems: [
    //                 {
    //                     id: 107,
    //                     label: "menuitems.multilevel.list.level1.level2.1",
    //                     link: "javascript: void(0);",
    //                     parentId: 106
    //                 },
    //                 {
    //                     id: 108,
    //                     label: "menuitems.multilevel.list.level1.level2.2",
    //                     link: "/level2.2",
    //                     parentId: 106
    //                 }
    //             ]
    //         }
    //     ]
    // }
];


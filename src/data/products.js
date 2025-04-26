const products = [
    {
        id: 'air-conditioner',
        name: 'Air Conditioner',
        image: '/images/air-conditioner.png',
        services: [
            {
                title: 'Installation',
                description: '*Includes installing ac at your place.',
                price: '₹ 1500/-',
            },
            {
                title: 'Uninstallation',
                description: '*Includes uninstalling ac from your place.',
                price: "₹ 800/-",
            },
            {
                title: 'Moving AC',
                description: '*Includes uninstalling from a place and reinstalling at new place.',
                price: '₹ 2500/-',
            },
            {
                title: 'Normal Service',
                description: '*Includes AC service with standard norms, includes cleaning without jet.',
                price: '₹ 350/-',
            },
            {
                title: 'Jet Service',
                description: '*Includes AC service with standard norms, includes cleaning using jet.',
                price: '₹ 700/-',
            },
            {
                title: 'Checkup',
                description: '*Includes checking the appliance.',
                price: 'Cost vary as per scenario.',
            }
        ],
    },
    {
        id: 'refrigerator',
        name: 'Refrigerator',
        image: '/images/refrigerator.png',
        services: [
            {
                title: 'Gas charging',
                description: '*Includes refilling the gas in compressor.',
                price: '₹ 1500/-',
            },
            {
                title: 'Checkup',
                description: '*Includes checking the appliance.',
                price: 'Cost vary as per scenario.',
            }
        ],
    },
    {
        id: 'washing-machine',
        name: 'Washing Machine',
        image: '/images/washing-machine.png',
        services: [
            {
                title: 'Checkup',
                description: '*Includes checking the appliance.',
                price: 'Cost vary as per scenario.',
            }
        ],
    },
    {
        id: 'water-purifier',
        name: 'Water Purifier',
        image: '/images/water-purifier.png',
        services: [
            {
                title: 'Checkup',
                description: '*Includes checking the appliance.',
                price: 'Cost vary as per scenario.',
            }
        ],
    },
    {
        id: 'microwave',
        name: 'Microwave',
        image: '/images/microwave.png',
        services: [
            {
                title: 'Checkup',
                description: '*Includes checking the appliance.',
                price: 'Cost vary as per scenario.',
            }
        ],
    },
];

export default products;

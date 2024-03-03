import Alpine from '/node_modules/alpinejs/dist/module.esm.js';

Alpine.data('NameGenerator', () => ({
    names: ['Ricky', 'Dicky', 'Dawn', 'Bobby', 'Carlos', 'Siarto', 'Rochelle', 'David', 'Jaden', 'Kennedy'],
    randomName: '',

    generateName() {
        const randomName = Math.floor(Math.random() * this.names.length);
        this.randomName = this.names[randomName];
    }
}));

Alpine.start();
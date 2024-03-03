import Alpine from '/node_modules/alpinejs/dist/module.esm.js';

Alpine.data('NameGenerator', () => ({
    names: ['David', 'Benny', 'Marcos', 'Abbie', 'Obed', 'Fernando', 'Tomas', 'Rodrigo', 'Minerva', 'Merari'],
    randomName: '',

    generateName() {
        const randomName = Math.floor(Math.random() * this.names.length);
        this.randomName = this.names[randomName];
    }
}));

Alpine.start();


export class CreatedComponents {
    public static components = [
        {
            title: 'exampleComponent',
            tag: '<lib-exampleComponent></lib-exampleComponent>', // tags to access components
            name: 'interativa-lib-example-component', // name of component ex: name-of-library-name-of-component, in this case name of library is interativaLib and name of compoent is exampleComponent 
            versions: [ // add on final array new version created for you
                {
                    number: '0.0.1',  // version finded in package.json on each libraries
                    description: 'Exemplo inicial para ser utilizado como parâmetro em outros components'
                }
            ],
        }
    ]
}
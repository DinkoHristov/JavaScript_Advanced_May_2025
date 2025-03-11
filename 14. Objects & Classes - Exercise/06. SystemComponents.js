function solve(input) {
    let result = [];

    input.forEach(element => {
        let [system, component, subcomponent] = element.split(' | ');

        let foundSystem = result.find(s => s.system == system);

        if (foundSystem) {
            let currSystem = result.find(s => s.system == system);
            let foundComponent = currSystem.components.find(c => c.component == component);

            if (foundComponent) {
                foundComponent.subComponents.push(subcomponent);
            } else {
                currSystem.components.push({
                    component,
                    subComponents: [],
                });

                foundComponent = currSystem.components.find(c => c.component == component);
                foundComponent.subComponents.push(subcomponent);
            }
        } else {
            result.push({
                system,
                components: [{
                    component,
                    subComponents: []
                }],
            });

            let currSystem = result.find(s => s.system == system);
            let currComponent = currSystem.components.find(c => c.component == component);

            currComponent.subComponents.push(subcomponent);
        }
    });

    result.sort( (a, b) => b.components.length - a.components.length || a.system.localeCompare(b.system));

    result.forEach(system => {
        console.log(system.system);

        let allComponents = system.components.sort( (a, b) => b.subComponents.length - a.subComponents.length);
        allComponents.forEach(component => {
            console.log(`|||${component.component}`);

            component.subComponents.forEach(subComponent => {
                console.log(`||||||${subComponent}`);
            });
        });
    });
}
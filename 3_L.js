// Liskov Substitution Principle

class Person {
    
}

class Member extends Person {
    access() {
        console.log('Permission accessed')
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {

    }
}

class Backend extends Member {
    canCreateBackend() {
        
    }
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('Permission denied! Get out of here!')
    }
}

function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
openSecretDoor(new PersonFromDifferentCompany())



class Component {
    isComponent = true
}

class ComponentWithTemplate {
    render() {
        return `<div>Component</div>`
    }
}

class HighOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {

    }
}

class FooterComponent extends ComponentWithTemplate {
    afterInti() {
        
    }
}

class HOC extends HighOrderComponent {
    render() {
        throw new Error('Render is impossible here')
    }

    wrapComponent() {
        component.wrapped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())

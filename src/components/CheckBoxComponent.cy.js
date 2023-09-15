import CheckboxComponent from "./CheckBoxComponent.vue";

describe("<CheckboxComponent />", () => {
  it("renders the component with props", () => {
    const propsData = {
      label: "Test Checkbox",
      isSelected: false,
    };

    cy.mount(CheckboxComponent, { propsData });

    cy.get(".checkbox__container").should("exist");
    
    cy.get(".checkbox__label").should("have.text", "Test Checkbox");

    cy.get(".checkbox__container").should("have.css", "border-color", "rgb(211, 211, 211)"); // lightgray
  });

  it("applies the correct style when isSelected is true", () => {
    const propsData = {
      label: "Test Checkbox",
      isSelected: true,
    };

    cy.mount(CheckboxComponent, { propsData });

    cy.get(".checkbox__container.selected").should("exist");
    cy.get(".checkbox__container.selected").should("have.css", "border-color", "rgb(85, 100, 164)"); // #5564a4
  });
});

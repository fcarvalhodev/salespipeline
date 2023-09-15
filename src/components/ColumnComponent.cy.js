import ColumnComponent from "./ColumnComponent.vue";

describe("<ColumnComponent />", () => {
  it("renders the component with props", () => {
    const propsData = {
      bgColor: "#f5f1ff",
      strongColor: "#000",
      toggleStyle: "flat-style",
      toggleColors: { toggleBg: "#e5dafc", circleColor: "#d4c1f9" },
      title: "LEAD",
    };

    cy.mount(ColumnComponent, { propsData });

    // Verifica se o componente foi renderizado
    cy.get(".column__container").should("exist");
    cy.get(".column__text-above").should("have.text", "LEAD");

    // Verifica se as cores estão corretas
    cy.get(".column__toggle-button").should(
      "have.css",
      "background-color",
      "rgb(229, 218, 252)"
    );
    cy.get(".column__inner-circle").should(
      "have.css",
      "background-color",
      "rgb(212, 193, 249)"
    );
  });
});

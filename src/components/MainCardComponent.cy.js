import MainCardComponent from "./MainCardComponent.vue";

describe("<MainCardComponent />", () => {
  it("renders the component", () => {
    cy.mount(MainCardComponent);

    cy.get(".main-card__container").should("exist");
    cy.get(".main-card__check-container").should("exist");
    cy.get(".main-card__columns-container").should("exist");
  });

  it("changes visible columns when checkboxes are clicked", () => {
    cy.mount(MainCardComponent);

    cy.get(".checkbox__label").contains("Basic").click();
    cy.get(".column__text-above").should("have.length", 2);

    cy.get(".checkbox__label").contains("Advanced").click();
    cy.get(".column__text-above").should("have.length", 4);

    cy.get(".checkbox__label").contains("Expert").click();
    cy.get(".column__text-above").should("have.length", 5);
  });
});

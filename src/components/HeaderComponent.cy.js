import HeaderComponent from "./HeaderComponent.vue";

describe("<HeaderComponent />", () => {
  it("renders the component", () => {
    cy.mount(HeaderComponent);

    cy.get(".header__button-container").should("exist");
    cy.get(".header__left-buttons").should("exist");
    cy.get(".header__center-buttons").should("exist");
    cy.get(".header__right-buttons").should("exist");
  });

  it("changes button style when clicked", () => {
    cy.mount(HeaderComponent);

    cy.get(".header__button").contains("1").click();
    cy.get(".header__button")
      .contains("1")
      .should("have.css", "background-color", "rgb(58, 62, 78)"); // #3a3e4e

    cy.get(".header__button").contains("2").click();
    cy.get(".header__button")
      .contains("2")
      .should("have.css", "background-color", "rgb(58, 62, 78)"); // #3a3e4e
  });
});

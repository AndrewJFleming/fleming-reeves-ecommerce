describe('shopping', () => {
    it('user can sign in and add items to cart and favorites', () => {
    //visit homepage, click login, and log in to the app
     cy.visit('/');
     cy.findByRole('link', { name: /login/i}).click();
     cy.findByRole('textbox', { name: /username/i }).type('007')
     cy.findByLabelText(/password \*/i).type('007testing');
     cy.findByRole('button', { name: /login/i }).click();
     //add all items on first page to favorites
     cy.findAllByRole('button', { name: /favorite$/i}).click({ multiple: true});
     //navigate to favorites page, and delete all from favorites
     cy.findByRole('button', { name: /favorites/i }).click();
     cy.findAllByRole('button', { name: /remove from favorites/i }).click({multiple: true});
     //return to home page
     cy.findByRole('link', {name: /fleming reeves ecommerce/i }).click();
     //add all items to cart
    cy.findAllByRole('button', { name: /add to cart/i}).click({ multiple: true });
     //navigate to cart
    cy.findByRole('button', { name: /^cart$/i }).click();
     //remove all items from cart
    cy.findAllByRole('button', { name: /remove from cart/i }).click({ multiple: true});
    })
})
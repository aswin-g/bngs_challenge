/// <reference types="cypress" />

describe('Feature: Add an item to the cart', () => {
    beforeEach(() => {
      cy.viewport(1440,900)
      cy.visit('https://www.bunnings.com.au')
    })

    it('[BNGS-1031] @regression - As a customer I would like to understand search functionality from placeholder text in any device', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      
      //Desktop resolution - 1536(width) * 960(height)
      cy.viewport('macbook-16')
      cy.get('input').invoke('attr', 'placeholder').should('contain', 'What can we help you find today?')

      //Mobile resolution - 360(width) *  760(height)
      cy.viewport("samsung-s10")
      cy.get('input').invoke('attr', 'placeholder').should('contain', 'Search products and more')

      //Tablet resolution - 768(width) *  1024(height)
      cy.viewport('ipad-2')
      cy.get('input').invoke('attr', 'placeholder').should('contain', 'Search products and more')
    })


    it('[BNGS-1032] @regression - As a customer I would like to see cart is empty before I start shopping', () => {
      
      cy.get('[data-locator="icon-cart"]').click()

      //Assertion on cart empty message
      cy.get('[data-locator="ErrorMessage_EmptyCart"]').should('have.text','Your cart is empty!To add items to your cart and continue shopping, check out our wide range of products that are now available to buy online')
    })

  
    it('[BNGS-1033] @smoke - As a customer I would like to see the relevant item listed based on the search keyword', () => {
      
      //Search input
      cy.get('#custom-css-outlined-input').click().type('Hammer')
      cy.get('#crossIcon').click()
      
      //Assertion on URL change for search
      cy.url().should('contain', "/search")
      
      //Wait for Search results
      cy.intercept('/v1/events*').as('search')
      cy.wait('@search')

      //Assertion on Search results
      cy.get('[id="searchResultContainer"]').contains('Showing')
      cy.getCookie('kampyleSessionPageCounter').should('exist')
      cy.get('[data-locator^="search-product-tile-title"]').first().contains('Hammer')
    })
})
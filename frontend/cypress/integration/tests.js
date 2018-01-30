describe('GTDer', function () {
  it('assert frontend is up', function () {
    // https://on.cypress.io/visit
    cy.visit('localhost:3000')
    cy.title().should('include', 'React App')
    cy.location().should(function (location) {
      expect(location.href).to.eq('http://localhost:3000/')
    })



  })
  it('sign in page', function () {
    cy.get('.center').click()
    cy.contains('Sign in').click()

    cy.location().should(function (location) {
      expect(location.href).to.eq('http://localhost:3000/signin')
    })




  })
  it('sign up page', function () {
    cy.contains('Sign up').click()
    cy.location().should(function (location) {
      expect(location.href).to.eq('http://localhost:3000/signup')
    })
  })

  it('sign in page, click login without password', function () {
    cy.contains('Sign in').click()
    cy.contains('Login').click()
    cy.get('.text-help').contains('Enter Username')

  })
  it('sign in page, click login without password', function () {
    cy.contains('Sign up').click()
    cy.get('.btn-primary').click()
    cy.get('.text-help').contains('Enter Username')

  })
  it('sign in page bad user/password', function () {
    cy.get('.center').click()
    cy.contains('Sign in').click()

    cy.location().should(function (location) {
      expect(location.href).to.eq('http://localhost:3000/signin')
    })

    cy.get('.form-group').contains('Username:').get('input[type=text]').type('xd')

    cy.get('.form-group').contains('Password:').get('input[type=password]').type('xd')
    cy.get('.btn-primary').click()
    cy.get('.info-red').contains('Invalid email or password')



  })
  it('sign in page sucessfully', function () {
    cy.get('.center').click()
    cy.contains('Sign in').click()

    cy.location().should(function (location) {
      expect(location.href).to.eq('http://localhost:3000/signin')
    })

    cy.get('.form-group').contains('Username:').get('input[type=text]').type('admin')

    cy.get('.form-group').contains('Password:').get('input[type=password]').type('admin')
    cy.get('.btn-primary').click()
    cy.get('.ButtonModal').contains('Add task')
    cy.get('.ButtonModal').contains('Add project')

    cy.contains('Sign out').click()
    cy.get('h1').contains('Good Bye')
  })

  it('Add Task works', function () {
    cy.get('.center').click()
    cy.contains('Sign in').click()

    cy.location().should(function (location) {
      expect(location.href).to.eq('http://localhost:3000/signin')
    })

    cy.get('.form-group').contains('Username:').get('input[type=text]').type('admin')

    cy.get('.form-group').contains('Password:').get('input[type=password]').type('admin')
    cy.get('.btn-primary').click()
    cy.get('.ButtonModal').contains('Add task')
    cy.get('.ButtonModal').contains('Add project')
    cy.get('.ButtonModal').contains('Add task').click()
    cy.get('.btn-default').click()
    cy.get('.ButtonModal').contains('Add task').click()
    cy.get('.form-group').get('input').first().type('nazwa')
    cy.get('.form-group').get('input').eq(1).type('nazwa')
    cy.get('.btn-primary').click()









  })
})
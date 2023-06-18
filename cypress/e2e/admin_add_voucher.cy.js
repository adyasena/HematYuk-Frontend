describe('Admin add voucher test', () => {
  let vocName;
  let vocCompany;
  let vocType;
  let vocValue;
  let vocMinimal;
  let vocPrice;
  let vocQuantity;
  let vocCode;

  beforeEach(() => {
    // {ganti properti dibawah ini sesuai dengan inputan yang diinginkan dan code voucher belum digunakan}
    vocName = "promo 17 agustus"
    vocCompany = "TOKOPEDIA"
    vocType = "discount"
    vocValue = 17000
    vocMinimal = 20000
    vocPrice = 17
    vocQuantity = 1000
    vocCode = "TOKOPEDIA17"

    cy.visit('https://hemat-yuk.vercel.app/login')
    cy.get('.input-email').type('adminiai@gmail.com')
    cy.get('.input-password').type('adminiai')
    cy.get('.btn-login').click()

    cy.url().should('eq', 'https://hemat-yuk.vercel.app/admin')
    cy.contains('Berhasil Masuk').should('exist');
    cy.wait(3000);

    cy.contains('Tambah Voucher').click();
  })

  // test menambahakan voucher dengan masukan yang valid
  it('should allow valid add voucher', () => {
    cy.get('.in-name').clear().type(vocName)
    cy.get('.in-company').clear().type(vocCompany)
    cy.get('.in-type').clear().type(vocType)
    cy.get('.in-value').clear().type(vocValue)
    cy.get('.in-minimal').clear().type(vocMinimal)
    cy.get('.in-price').clear().type(vocPrice)
    cy.get('.in-quantity').clear().type(vocQuantity)
    cy.get('.in-code').clear().type(vocCode)
    cy.get('.btn-add').trigger('click');

    // untuk memverifikasi test menambahakan voucher dengan masukan yang valid berhasil, 
    // dengan verifikasi :  terdapat toast ("Berhasil menambahkan voucher")
    cy.contains("Berhasil menambahkan voucher").should('exist');
  })

  // test menambahakan voucher tanpa masukan nama voucher
  it('should show error when without username field)', () => {
    // cy.get('.in-name').clear().type(vocName)
    cy.get('.in-company').clear().type(vocCompany)
    cy.get('.in-type').clear().type(vocType)
    cy.get('.in-value').clear().type(vocValue)
    cy.get('.in-minimal').clear().type(vocMinimal)
    cy.get('.in-price').clear().type(vocPrice)
    cy.get('.in-quantity').clear().type(vocQuantity)
    cy.get('.in-code').clear().type(vocCode)
    cy.get('.btn-add').trigger('click');

    // untuk memverifikasi test test menambahakan voucher tanpa masukan nama voucher berhasil, 
    // dengan verifikasi :  terdapat toast ("Please fill out all field.")
    cy.contains("Please fill out all field.").should('exist');
  })

  // test menambahakan voucher tanpa masukan nama company
  it('should show error when without vouchername field)', () => {
    cy.get('.in-name').clear().type(vocName)
    // cy.get('.in-company').clear().type(vocCompany)
    cy.get('.in-type').clear().type(vocType)
    cy.get('.in-value').clear().type(vocValue)
    cy.get('.in-minimal').clear().type(vocMinimal)
    cy.get('.in-price').clear().type(vocPrice)
    cy.get('.in-quantity').clear().type(vocQuantity)
    cy.get('.in-code').clear().type(vocCode)
    cy.get('.btn-add').trigger('click');

    // untuk memverifikasi test test menambahakan voucher tanpa masukan nama company berhasil, 
    // dengan verifikasi :  terdapat toast ("Please fill out all field.")
    cy.contains("Please fill out all field.").should('exist');
  })

  // test menambahakan voucher tanpa masukan nama company aplikasi
  it('should show error when without company/aplication field)', () => {
    cy.get('.in-name').clear().type(vocName)
    // cy.get('.in-company').clear().type(vocCompany)
    cy.get('.in-type').clear().type(vocType)
    cy.get('.in-value').clear().type(vocValue)
    cy.get('.in-minimal').clear().type(vocMinimal)
    cy.get('.in-price').clear().type(vocPrice)
    cy.get('.in-quantity').clear().type(vocQuantity)
    cy.get('.in-code').clear().type(vocCode)
    cy.get('.btn-add').trigger('click');

    // untuk memverifikasi test test menambahakan voucher tanpa masukan nama company aplikasi berhasil, 
    // dengan verifikasi :  terdapat toast ("Please fill out all field.")
    cy.contains("Please fill out all field.").should('exist');
  })

  // test menambahakan voucher tanpa masukan nama tipe
  it('should show error when without type field)', () => {
    cy.get('.in-name').clear().type(vocName)
    cy.get('.in-company').clear().type(vocCompany)
    cy.get('.in-type').clear()
    cy.get('.in-value').clear().type(vocValue)
    cy.get('.in-minimal').clear().type(vocMinimal)
    cy.get('.in-price').clear().type(vocPrice)
    cy.get('.in-quantity').clear().type(vocQuantity)
    cy.get('.in-code').clear().type(vocCode)
    cy.get('.btn-add').trigger('click');

    // untuk memverifikasi test test menambahakan voucher tanpa masukan tipe berhasil, 
    // dengan verifikasi :  terdapat toast ("Please fill out all field.")
    cy.contains("Please fill out all field.").should('exist');
  })

  // test menambahakan voucher tanpa masukan nilai
  it('should show error when without value field)', () => {
    cy.get('.in-name').clear().type(vocName)
    cy.get('.in-company').clear().type(vocCompany)
    cy.get('.in-type').clear().type(vocType)
    // cy.get('.in-value').clear().type(vocValue)
    cy.get('.in-minimal').clear().type(vocMinimal)
    cy.get('.in-price').clear().type(vocPrice)
    cy.get('.in-quantity').clear().type(vocQuantity)
    cy.get('.in-code').clear().type(vocCode)
    cy.get('.btn-add').trigger('click');

    // untuk memverifikasi test test menambahakan voucher tanpa masukan nilai berhasil, 
    // dengan verifikasi :  terdapat toast ("Please fill out all field.")
    cy.contains("Please fill out all field.").should('exist');
  })

  // test menambahakan voucher tanpa masukan minimal 
  it('should show error when without minimal field)', () => {
    cy.get('.in-name').clear().type(vocName)
    cy.get('.in-company').clear().type(vocCompany)
    cy.get('.in-type').clear().type(vocType)
    cy.get('.in-value').clear().type(vocValue)
    // cy.get('.in-minimal').clear().type(vocMinimal)
    cy.get('.in-price').clear().type(vocPrice)
    cy.get('.in-quantity').clear().type(vocQuantity)
    cy.get('.in-code').clear().type(vocCode)
    cy.get('.btn-add').trigger('click');

    // untuk memverifikasi test test menambahakan voucher tanpa masukan minimal berhasil, 
    // dengan verifikasi :  terdapat toast ("Please fill out all field.")
    cy.contains("Please fill out all field.").should('exist');
  })

  // test menambahakan voucher tanpa masukan price atau poin 
  it('should show error when without price field)', () => {
    cy.get('.in-name').clear().type(vocName)
    cy.get('.in-company').clear().type(vocCompany)
    cy.get('.in-type').clear().type(vocType)
    cy.get('.in-value').clear().type(vocValue)
    cy.get('.in-minimal').clear().type(vocMinimal)
    // cy.get('.in-price').clear().type(vocPrice)
    cy.get('.in-quantity').clear().type(vocQuantity)
    cy.get('.in-code').clear().type(vocCode)
    cy.get('.btn-add').trigger('click');

    // untuk memverifikasi test test menambahakan voucher tanpa masukan price atau poin  berhasil, 
    // dengan verifikasi :  terdapat toast ("Please fill out all field.")
    cy.contains("Please fill out all field.").should('exist');
  })

  // test menambahakan voucher tanpa masukan kuantitas 
  it('should show error when without quantity field)', () => {
    cy.get('.in-name').clear().type(vocName)
    cy.get('.in-company').clear().type(vocCompany)
    cy.get('.in-type').clear().type(vocType)
    cy.get('.in-value').clear().type(vocValue)
    cy.get('.in-minimal').clear().type(vocMinimal)
    cy.get('.in-price').clear().type(vocPrice)
    // cy.get('.in-quantity').clear().type(vocQuantity)
    cy.get('.in-code').clear().type(vocCode)
    cy.get('.btn-add').trigger('click');

    // untuk memverifikasi test test menambahakan voucher tanpa masukan kuantitas  berhasil, 
    // dengan verifikasi :  terdapat toast ("Please fill out all field.")
    cy.contains("Please fill out all field.").should('exist');
  })

  // test menambahakan voucher tanpa masukan kode voucher 
  it('should show error when without vouchercode field)', () => {
    cy.get('.in-name').clear().type(vocName)
    cy.get('.in-company').clear().type(vocCompany)
    cy.get('.in-type').clear().type(vocType)
    cy.get('.in-value').clear().type(vocValue)
    cy.get('.in-minimal').clear().type(vocMinimal)
    cy.get('.in-price').clear().type(vocPrice)
    cy.get('.in-quantity').clear().type(vocQuantity)
    // cy.get('.in-code').clear().type(vocCode)
    cy.get('.btn-add').trigger('click');

    // untuk memverifikasi test test menambahakan voucher tanpa masukan kode voucher  berhasil, 
    // dengan verifikasi :  terdapat toast ("Please fill out all field.")
    cy.contains("Please fill out all field.").should('exist');
  })


})
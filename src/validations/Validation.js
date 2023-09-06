import * as yup from 'yup'

export const stepperValidate = yup.object().shape({
	// step 1
	senderDate: yup.string().when('currentStep', {
		is: 1,
		then: schema => schema.required('Gönderi Tarihi Zorunludur'),
	}),
	paymentType: yup.string().when('currentStep', {
		is: 1,
		then: schema => schema.required('Ödeme Tipi Zorunludur'),
	}),
	company: yup.string().when('currentStep', {
		is: 1,
		then: schema => schema.required('Firma Zorunludur'),
	}),

	// step 2
	receiver: yup.string().when('currentStep', {
		is: 2,
		then: schema => schema.required('Alıcı Seçmeniz Zorunludur'),
	}),
	deliveryAddress: yup.string().when('currentStep', {
		is: 2,
		then: schema => schema.required('Teslimat Adresi Zorunludur'),
	}),
	integrationType: yup.string().when('currentStep', {
		is: 2,
		then: schema => schema.required('Entegrasyon Tipi Zorunludur'),
	}),

	// step 3
	bagNumber: yup.string().when('currentStep', {
		is: 3,
		then: schema => schema.required('Poşet Numarası Zorunludur'),
	}),
	productType: yup.string().when('currentStep', {
		is: 3,
		then: schema => schema.required('Ürün Türü Zorunludur'),
	}),
	cargoCompany: yup.string().when('currentStep', {
		is: 3,
		then: schema => schema.required('Kargo Şirketi Zorunludur'),
	}),

	// step 4
	branch: yup.string().when('currentStep', {
		is: 4,
		then: schema => schema.required('Şube Zorunludur'),
	}),
	paymentType2: yup.string().when('currentStep', {
		is: 4,
		then: schema => schema.required('Ödeme Tipi Zorunludur'),
	}),
	cargoAmount: yup.string().when('currentStep', {
		is: 4,
		then: schema => schema.required('Kargo Ücreti Zorunludur'),
	}),

	// step 5
	exchangeRate: yup.string().when('currentStep', {
		is: 5,
		then: schema => schema.required('Döviz Kuru Zorunludur'),
	}),
	tlEquivalent: yup.string().when('currentStep', {
		is: 5,
		then: schema => schema.required('TL Karşılığı Zorunludur'),
	}),
	amountWithoutVat: yup.string().when('currentStep', {
		is: 5,
		then: schema => schema.required("KDV'siz tutar Zorunludur"),
	}),
})

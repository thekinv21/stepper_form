import React from 'react'

import cn from 'classnames'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { stepperValidate } from './validations/Validation'

import { AiOutlineCheck } from 'react-icons/ai'

const App = () => {
	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<Formik
				validationSchema={stepperValidate}
				initialValues={{
					// common current step
					currentStep: 1,
					lastStep: 6,
					// step 1
					senderDate: '',
					paymentType: '',
					company: '',

					// step 2
					receiver: '',
					deliveryAddress: '',
					integrationType: '',

					// step 3
					bagNumber: '',
					productType: '',
					cargoCompany: '',

					// step 4
					branch: '',
					paymentType2: '',
					cargoAmount: '',
					// step 5
					exchangeRate: '',
					tlEquivalent: '',
					amountWithoutVat: '',

					// step 6
					notes: '',
				}}
				onSubmit={(values, actions) => {
					console.log('values', values)
				}}
			>
				{({ values, setFieldValue, isValid, dirty, resetForm }) => {
					const next = () => {
						setFieldValue('currentStep', values.currentStep + 1)
					}

					const prev = () => {
						// setFieldValue(prev.currentStep - 1)
						setFieldValue('currentStep', values.currentStep - 1)
					}

					const stepperArray = [
						{ step: 1, title: 'Gönderi Bilgileri' },
						{ step: 2, title: 'Alıcı  Bilgileri' },
						{ step: 3, title: 'Hesap Bilgileri' },
						{ step: 4, title: 'Şube Bilgileri' },
						{ step: 5, title: 'Ödeme Tutarkarı' },
						{ step: 6, title: 'Notlar' },
					]

					return (
						<Form className='w-auto min-w-[800px]  bg h-[300px] rounded-lg px-10 bg-[#242422] py-5 mx-auto flex justify-center  flex-col gap-y-5 '>
							<div className='stepper-wrapper transition-all ease-in-out duration-300 '>
								{stepperArray.map((item, idx) => (
									<div
										className={cn(
											`stepper-item
											
											${values.currentStep === 6 ? `completed` : ''}
											
											${item.step === 1 ? `completed` : ''}  grid grid-cols-6 gap-y-1`,
											{
												'stepper-item completed ':
													values.currentStep > item.step,
											}
										)}
										key={idx}
									>
										<button type='button' className={cn('step-counter')}>
											{values.currentStep > item.step ? (
												<AiOutlineCheck />
											) : (
												item.step
											)}
										</button>
										<span className='text-xs'>{item.title}</span>
									</div>
								))}
							</div>

							{values.currentStep === 1 && (
								<div className='grid grid-cols-3 gap-x-5'>
									<div>
										<Field
											type='date'
											name='senderDate'
											className='input'
											placeholder='Gönderi Tarihi'
										/>
										<ErrorMessage
											name='senderDate'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>
									<div>
										<Field
											component='select'
											name='paymentType'
											className='input'
											placeholder='Ödeme türü'
										>
											<option value=''>Ödeme türü</option>
											<option value='Nakit'>Nakit</option>
											<option value='Kredi Kartı'>Kredi Kartı</option>
										</Field>

										<ErrorMessage
											name='paymentType'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>
									<div>
										<Field
											component='select'
											name='company'
											className='input'
											placeholder='Firma'
										>
											<option value=''>Firma</option>
											<option value='Firma1'>Firma1</option>
											<option value='Firma2'>Firma2</option>
										</Field>

										<ErrorMessage
											name='company'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>
								</div>
							)}
							{values.currentStep === 2 && (
								<div className='grid grid-cols-3 gap-x-5'>
									<div>
										<Field
											component='select'
											name='receiver'
											className='input'
											placeholder='Alıcı'
										>
											<option value=''>Alıcı</option>
											<option value='Alıcı1'>Alıcı1</option>
											<option value='Alıcı2'>Alıcı2</option>
										</Field>
										<ErrorMessage
											name='receiver'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>

									<div>
										<Field
											component='select'
											name='deliveryAddress'
											className='input'
											placeholder='Teslimat adresi'
										>
											<option value=''>Teslimat adresi</option>
											<option value='Adres1'>Adres1</option>
											<option value='Adres2'>Adres2</option>
										</Field>
										<ErrorMessage
											name='deliveryAddress'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>

									<div>
										<Field
											component='select'
											name='integrationType'
											placeholder='Entegrasyon Türü'
											className='input'
										>
											<option value=''>Entegrasyon Türü</option>
											<option value='Entegrasyon1'>Entegrasyon1</option>
											<option value='Entegrasyon2'>Entegrasyon2</option>
										</Field>
										<ErrorMessage
											name='integrationType'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>
								</div>
							)}
							{values.currentStep === 3 && (
								<div className='grid grid-cols-3 gap-x-5'>
									<div>
										<Field
											name='bagNumber'
											className='input'
											placeholder='Paket Numarası'
										/>
										<ErrorMessage
											name='bagNumber'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>

									<div>
										<Field
											component='select'
											name='productType'
											placeholder='Ürün türü'
											className='input'
										>
											<option value=''>Ürün türü</option>
											<option value='Ürün1'>Ürün1</option>
											<option value='Ürün2'>Ürün2</option>
										</Field>
										<ErrorMessage
											name='productType'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>

									<div>
										<Field
											component='select'
											name='cargoCompany'
											placeholder='Kargo şirketi'
											className='input'
										>
											<option value=''>Kargo şirketi</option>
											<option value='Kargo1'>Kargo1</option>
											<option value='Kargo2'>Kargo2</option>
										</Field>
										<ErrorMessage
											name='cargoCompany'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>
								</div>
							)}
							{values.currentStep === 4 && (
								<div className='grid grid-cols-3 gap-x-5'>
									<div>
										<Field
											component='select'
											name='branch'
											className='input'
											placeholder='Şube'
										>
											<option value=''>Şube</option>
											<option value='Şube1'>Şube1</option>
											<option value='Şube2'>Şube2</option>
										</Field>
										<ErrorMessage
											name='branch'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>
									<div>
										<Field
											name='paymentType2'
											placeholder='Ürün tutarı ( $ )'
											className='input'
										/>
										<ErrorMessage
											name='paymentType2'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>
									<div>
										<Field
											name='cargoAmount'
											placeholder='Kargo tutarı'
											className='input'
										/>
										<ErrorMessage
											name='cargoAmount'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>
								</div>
							)}
							{values.currentStep === 5 && (
								<div className='grid grid-cols-3 gap-x-5'>
									<div>
										<Field
											name='exchangeRate'
											className='input'
											placeholder='Döviz kuru'
										/>
										<ErrorMessage
											name='exchangeRate'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>

									<div>
										<Field
											name='tlEquivalent'
											placeholder='TL karşılığı'
											className='input'
										/>
										<ErrorMessage
											name='tlEquivalent'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>

									<div>
										<Field
											name='amountWithoutVat'
											placeholder='KDV hariç tutar'
											className='input'
										/>

										<ErrorMessage
											name='amountWithoutVat'
											component='small'
											className='text-xs text-red-500 block mt-1 ml-1'
										/>
									</div>
								</div>
							)}
							{values.currentStep === 6 && (
								<div className='grid grid-cols-1  '>
									<Field
										component='textarea'
										name='notes'
										className='input_textarea '
										placeholder='Herhangi bir notunuz varsa yazabilirsiniz'
									/>
								</div>
							)}

							<div
								className={`flex mt-10  w-full ${
									values.currentStep !== 1 ? 'justify-between ' : 'justify-end'
								} `}
							>
								{values.currentStep !== 1 && (
									<button
										type='button'
										onClick={prev}
										className={`w-[130px] py-1   bg-red-500 text-white rounded-md`}
									>
										Geri
									</button>
								)}
								{values.currentStep !== values.lastStep ? (
									<button
										type='button'
										onClick={next}
										className='w-[130px] py-1 bg-green-500 text-white rounded-md disabled:opacity-50'
										disabled={!isValid || !dirty}
									>
										Devam
									</button>
								) : null}

								{values.currentStep === values.lastStep && (
									<button
										type='submit'
										className={`w-[130px] py-1 bg-green-500 text-white rounded-md`}
									>
										Bitir
									</button>
								)}
							</div>
						</Form>
					)
				}}
			</Formik>
		</div>
	)
}

export default App

import { defineStore } from 'pinia'
import { ref, toRaw } from 'vue'
// import api from '@/axiosConfig'
import emailjs from '@emailjs/browser'

interface FormData {
  natureProject: string | null
  typeCommercialProject: string | null
  situatedProject: string | null
  hasProject: string | null
  desiredServices: Array<string> | null
  hasQualifier: string | null
  additionalInformation: string | null
  contactQuestion: string | null
}

export const useFormStore = defineStore('form', () => {
  const formData = ref<FormData>({
    natureProject: null,
    typeCommercialProject: null,
    situatedProject: null,
    hasProject: null,
    desiredServices: [],
    hasQualifier: null,
    additionalInformation: null,
    contactQuestion: null,
  })

  // Função para resetar o formulário
  const resetForm = async () => {
    formData.value = {
      natureProject: null,
      typeCommercialProject: null,
      situatedProject: null,
      hasProject: null,
      desiredServices: [],
      hasQualifier: null,
      additionalInformation: null,
      contactQuestion: null,
    }
  }

  const formErrors = ref<Record<keyof FormData, string>>({
    natureProject: '',
    typeCommercialProject: '',
    situatedProject: '',
    hasProject: '',
    desiredServices: '',
    hasQualifier: '',
    additionalInformation: '',
    contactQuestion: '',
  })

  // Função de validação simples
  const validateForm = () => {
    formErrors.value.natureProject = formData.value.natureProject
      ? ''
      : 'Selecione a natureza do projeto'

    formErrors.value.typeCommercialProject = formData.value
      .typeCommercialProject
      ? ''
      : 'Informe o tipo de projeto comercial'

    formErrors.value.situatedProject = formData.value.situatedProject
      ? ''
      : 'Selecione a localização do projeto'

    formErrors.value.hasProject = formData.value.hasProject
      ? ''
      : 'Selecione uma opção'

    formErrors.value.desiredServices = formData.value.desiredServices
      ? ''
      : 'Informe os serviços desejados'

    formErrors.value.hasQualifier = formData.value.hasQualifier
      ? ''
      : 'Selecione se possui qualificações'

    formErrors.value.additionalInformation = formData.value
      .additionalInformation
      ? ''
      : 'Adicione informações adicionais'

    formErrors.value.contactQuestion = formData.value.contactQuestion
      ? ''
      : 'Informe como podemos entrar em contato'

    return Object.values(formErrors.value).every(error => error === '')
  }

  const submitFormData = async () => {
    try {
      const plainData = toRaw(formData.value)
      const response = await emailjs.send(
        'service_xgim28nu',
        'template_zt2327sff',
        {
          ...plainData,
        },
        'c-asd82513WTWVWV',
      )
      return response.status == 200
    } catch (error) {
      console.log(error)
      return false
    }
  }

  return { formData, formErrors, validateForm, resetForm, submitFormData }
})

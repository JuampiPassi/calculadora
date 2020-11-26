import { shallowMount } from '@vue/test-utils'
import Boton from '@/components/Boton.vue'

describe('componente botón', () => {
  it('El texto del botón debe ser el que se pasa por propiedad value', () => {
    
    const wrapper = shallowMount(Boton, {
      props: { 
        value : 5
        }
    })
        expect(wrapper.text()).toMatch('5')
  })

  it('Al presionar el botón, se debe disparar un evento que pase como argumento el valor del propiedadvalue', () => {
      const wrapper = shallowMount(Boton, {
          props: { 
              value : 5,
            }
        })
       // global.devolverValor = jest.fn()
        wrapper.trigger('click')
        expect(devolverValor).toEqual(5)
 
  })
})
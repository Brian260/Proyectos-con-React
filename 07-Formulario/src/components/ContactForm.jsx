import './Form.css'
import useForm from '../Hooks/useForm.js'
import 'boxicons'

export function Form(){
    const initialData = {
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
      }
    
      const onValidate = (form) => {
        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,255}$/;
    
        if (!form.nombre.trim()) {
          errors.nombre = 'El campo "Nombre" no debe ser vacio.'
        } else if (!regexName.test(form.nombre)){
          errors.nombre = 'El campo "Nombre" solo acepta letras y espacios.'
        }
    
        if (!form.correo.trim()) {
          errors.correo = 'El campo "Correo" no debe ser vacio.'
        } else if (!regexEmail.test(form.correo)){
          errors.correo = 'El campo "Correo" contiene un formato no valido.'
        }
    
        if (!form.asunto.trim()) {
          errors.asunto = 'El campo "Asunto" no debe ser vacio.'
        } else if (!regexName.test(form.asunto)){
          errors.asunto = 'El campo "Asunto" solo acepta letras y espacios.'
        }
    
        if (!form.mensaje.trim()) {
          errors.mensaje = 'El campo "Mensaje" no debe ser vacio.'
        } else if (!regexComments.test(form.mensaje)){
          errors.mensaje = 'El campo "Mensaje" acepta solo 255 caracteres.'
        }
    
        return errors
      }
    
      const { form, errors, loading, handleChange, handleSubmit } = useForm(initialData, onValidate)

    return (
        <>
            <h2>Formulario de contacto:</h2>
            <form autoComplete='off' onSubmit={handleSubmit} className='form' >
                <label className='form-label' htmlFor='nombre'>Nombre:</label>
                    <input onChange={handleChange} className='form-input' id='nombre' name='nombre' value={form.nombre} placeholder='Jack Sparrow, Thomas Shelby' />
                    {errors.nombre ?  <div className='error error1'><box-icon name='error-alt' color='#d11a1a'></box-icon></div>
                                    :  <div className='error error1'><box-icon name='check' color='#297fca' ></box-icon></div>
                    }
                <label className='form-label' htmlFor='gmail'>Gmail:</label>
                    <input onChange={handleChange} type='email' className='form-input' id='gmail' name='correo' value={form.correo}  placeholder='Shelby@gmail.com' />
                    {errors.correo  ?  <div className='error error2'><box-icon name='error-alt' color='#d11a1a'></box-icon></div>
                                    :  <div className='error error2'><box-icon name='check' color='#297fca' ></box-icon></div>
                    }
                <label className='form-label' htmlFor='mensaje'>Deje su mensaje:</label>
                <textarea onChange={handleChange} id='mensaje' name='mensaje' value={form.mensaje} >
                </textarea>
                    {errors.mensaje  ?  <div className='error error3'><box-icon name='error-alt' color='#d11a1a'></box-icon></div>
                                    :  <div className='error error3'><box-icon name='check' color='#297fca' ></box-icon></div>
                    }
                <button>Enviar</button>
            </form>
        </>
    )
}
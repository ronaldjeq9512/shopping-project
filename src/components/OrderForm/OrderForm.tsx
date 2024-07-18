import React from 'react';
import { useOrderForm } from '../../hooks/useOrderForm';


export const OrderForm: React.FC = () => {
  const {handleSubmit, onSubmit, register, errors} = useOrderForm()

  return (
    <article className="col-md-6">
      <h2>Información de Pedido</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && <span className="text-danger">Este campo es obligatorio</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            {...register('lastName', { required: true })}
          />
          {errors.lastName && <span className="text-danger">Este campo es obligatorio</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="address"
            {...register('address', { required: true })}
          />
          {errors.address && <span className="text-danger">Este campo es obligatorio</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            {...register('phone', { required: true })}
          />
          {errors.phone && <span className="text-danger">Este campo es obligatorio</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="paymentMethod" className="form-label">Método de Pago</label>
          <select
            className="form-select"
            id="paymentMethod"
            {...register('paymentMethod', { required: true })}
          >
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta_credito">Tarjeta de Crédito</option>
            <option value="tarjeta_debito">Tarjeta de Débito</option>
          </select>
          {errors.paymentMethod && <span className="text-danger">Este campo es obligatorio</span>}
        </div>
        <p className="text-muted">El pago se realiza contraentrega.</p>
        <button type="submit" className="btn btn-primary">Realizar Pedido</button>
      </form>
    </article>
  );
};

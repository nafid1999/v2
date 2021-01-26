import { FETCH_STATUS, FETCH_SUPPLIER, FETCH_PAYMENT_TERM, FETCH_DOCUMENT_INVOICE, FETCH_INVOICE } from '../../constants';
import { URL_STATUS, URL_SUPPLIER, URL_INVOICE, URL_CREATE_INVOICE } from '../../constants/endpoint';
import { format } from 'date-fns';

export const fetchStatus = id => ({
  type: FETCH_STATUS,
  request: { url: `${URL_STATUS}/${id}` },
});

export const fetchListStatus = () => ({
  type: `LIST_${FETCH_STATUS}`,
  request: { url: `${URL_STATUS}` },
});

export const fetchSupplier = id => ({
  type: FETCH_SUPPLIER,
  request: { url: `${URL_SUPPLIER}/${id}` },
});

export const fetchSuppliers = () => ({
  type: `LIST_${FETCH_SUPPLIER}`,
  request: { url: `${URL_SUPPLIER}` },
});

export const fetchPaymentTerm = id => ({
  type: FETCH_PAYMENT_TERM,
  request: { url: `${FETCH_PAYMENT_TERM}/${id}` },
});

export const fetchPaymentTerms = () => ({
  type: `LIST_${FETCH_PAYMENT_TERM}`,
  request: { url: `${FETCH_PAYMENT_TERM}` },
});

export const fetchDocumentInvoice = (idInvoice, type = 'inv') => ({
  type: FETCH_DOCUMENT_INVOICE,
  request: {
    url: `/${idInvoice}/document`,
    params: { type },
    responseType: 'blob'
  },

});
export const downloadInvoice = (idInvoice, type = 'inv') => ({
  type: FETCH_DOCUMENT_INVOICE,
  request: {
    url: `/${idInvoice}/document`,
    params: { type },
    responseType: 'blob'
  },
  meta: {
    onSuccess: (response, requestAction, store) => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(new Blob([response.data]));;
      link.setAttribute('download', 'invoice.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      return response;
    },
  },

});

export const fetchInvoice = id => ({
  type: FETCH_INVOICE,
  request: { url: `/${id}` },
});

export const deleteInvoice = id => ({
  type: FETCH_INVOICE,
  request: {
    url: `/${id}`,
    method: 'delete',
  },
});


export const fetchInvoices = (filter = {}, sortBy) => {
  console.log("filter" + filter)
  const { invoiceNoOrSupplierCode, status, startDate, endDate, pageNo, pageSize } = filter;
  return ({
    type: `LIST_${FETCH_INVOICE}`,
    request: {
      url: `${URL_INVOICE}`,
      params: {
        invoiceNoOrSupplierCode,
        status: status ? status.join(',') : null, startDate: startDate ? format(new Date(startDate), 'yyyy/MM/dd') : null,
        endDate: endDate ? format(new Date(endDate), 'yyyy/MM/dd') : null, pageNo, pageSize, sortBy
      }
    },
  })
};


export const updateInvoice = (id, invoice) => {
  if (invoice && invoice.issueDate) {
    invoice = { ...invoice, issueDate: format(new Date(invoice.issueDate), 'dd/MM/yyyy') };
  }
  if (invoice && invoice.dueDate) {
    invoice = { ...invoice, dueDate: format(new Date(invoice.dueDate), 'dd/MM/yyyy') };
  }
  return ({
    type: 'UPDATE_INVOICE',
    request: {
      url: `/${id}`,
      method: 'put',
      data: invoice,
    },

  })
};
export const createInvoice = (file) => {
  let data = new FormData();
  data.append('file', file);
  return ({
    type: 'CREATE_INVOICE',
    request: {
      url: URL_CREATE_INVOICE,
      method: 'post',
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    },
    meta: {
      onSuccess: (response, requestAction, store) => {
        return response;
      },
    },

  })
};
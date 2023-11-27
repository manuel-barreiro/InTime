# ShortCut
Design and development of a web application for a bar in Buenos Aires, with order system and payment processing via Mercado Pago. Email notifications with Resend

## Design Proposal
![image](https://github.com/manuel-barreiro/InTime/assets/103281038/349be509-3245-4b7c-8086-c92694e23601)

## Finished Product
![image](https://github.com/manuel-barreiro/InTime/assets/103281038/f04fa574-4225-42a9-bc50-a00f72617f97)

## Admin panel
### /pedidos (orders) and /pagos (payments) are protected routes
![image](https://github.com/manuel-barreiro/InTime/assets/103281038/8e10c644-4f1e-4300-8a66-dd6ea6d4102d)

## /pedidos (orders) 

This route is used by the barman to check incoming orders.

![image](https://github.com/manuel-barreiro/InTime/assets/103281038/a6e9781f-597e-4050-b0f5-7a40363d2a62)

## /pagos (payments)

This route is oriented for the bar owner, to check processed payments.

![image](https://github.com/manuel-barreiro/InTime/assets/103281038/9247d16b-3910-4dcb-a969-9aba888ad91b)

## Email notifications with Resend

![image](https://github.com/manuel-barreiro/InTime/assets/103281038/0cdb5685-8156-4265-a87c-8843626884af)


## How It's Made:

**Tech used:** Next.js, MongoDB, Tailwind CSS, MercadoPago, Resend, Shadcn UI, Zod Validation, LocalStorage

## Optimizations

Some possible optimizations could be adding user auth and roles, to improve the app workflow.

## Lessons Learned:

I've learnt how difficult and volatile the gastronomy industry is, and how to deal and work with it.


# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PUBLIC_KEY = `your mercadopago access token`
  - MONGODB_URI = `your database URI`
  - RESEND_API_KEY = `your Resend API key`
  - NEXT_PUBLIC_ADMIN_USER = `admin auth username`
  - NEXT_PUBLIC_ADMIN_PASS = `admin auth password`

---

# Run

`npm run dev`

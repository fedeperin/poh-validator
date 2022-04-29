# POH Validator
A way to chech if a person is registered at Proof Of Humanity

## Installation
You can install it via npm:
```bash
npm i poh-validator
```

Or you can import it at the head tag of a page:
```html
<script src="https://cdn.jsdelivr.net/npm/poh-validator@1.0.0/app.js">
```

## Usage
POH Validator has a main object that contains two functions: 
| Function  | Params     | Description              |
| :-------- | :------- | :------------------------- |
| `POHValidator.isRegistered()` | **Required** `string` Ethereum Address | A function that returns a bool. True if the profile is registered, and false if not |
| `POHValidator.getUserData()` | **Required** `string` Ethereum Address | A function that returns an object with a lot of information about the user |
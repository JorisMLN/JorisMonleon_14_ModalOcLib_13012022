# React Modal

## Install
```
$ npm install jm-modal-oc
```

### Usage
After installing the package, go to the parent component of your modal and import useState
```
import { useState } from 'react';
```

Then copy/past this hook into the parent component of this modal:
```
const [modal, setModal] = useState(false);
```

### Set the modal
Example:

```
<JmModalOc
  isOpen={modal} 
  title={'Modal Title'}
  isRouter={true}
  routerTitle={'Button title'}
  routerLink={'/routingExample'}
  size={'small'}
>
  <div className='children'>
    <div> Display in the body </div>
  </div>
</JmModalOc>
```

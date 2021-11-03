# @thinhvu/capacitor-holy-pipe

Holy pipe - invoke registered fn directly from js

## Install

```bash
npm install capacitor-holy-pipe
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```javascript
import { HolyPipe } from 'capacitor-holy-pipe';
const login = async (username, password, rememberPassword) => await HolyPipe.echo({ 
  action: 'login', 
  params: { username, password, rememberPassword } 
}, (resp) => {
  const loginResult = resp.value.loginResult
  console.log('loginResult', loginResult)
});
```

```java
import com.sfbl.capacitor.holypipe.HolyPipePlugin;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        HolyPipePlugin.actions.put("login", call -> {
            JSObject params = call.getObject("params");
            String username = params.getString("username");
            String password = params.getString("password");
            Boolean rememberPassword = params.getBool("rememberPassword");
            Boolean result = this.login(username, password, rememberPassword);
            JSObject resp = new JSObject();
            resp.put("loginResult", result);
            call.resolve(resp);
        });
    }
    
    protected void login(String username, String password, Boolean rememberPassword) {
        // ...
        return false;
    }
}
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>

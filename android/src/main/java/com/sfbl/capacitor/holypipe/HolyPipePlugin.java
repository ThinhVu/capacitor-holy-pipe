package com.sfbl.capacitor.holypipe;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.HashMap;

@CapacitorPlugin(name = "HolyPipe")
public class HolyPipePlugin extends Plugin {

    public static HashMap<String, HolyPipeAction> actions = new HashMap<>();

    @PluginMethod
    public void echo(PluginCall call) {
        String action = call.getString("action");
        if (actions.containsKey(action)) {
            actions.get(action).call(call);
        } else {
            call.resolve(new JSObject());
        }
    }
}

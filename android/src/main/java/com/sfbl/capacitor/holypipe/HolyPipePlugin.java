package com.sfbl.capacitor.holypipe;

import android.util.Log;

public class HolyPipePlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}

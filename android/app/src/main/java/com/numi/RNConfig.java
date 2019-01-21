package com.numi;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.numi.BuildConfig;

import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;

public class RNConfig extends ReactContextBaseJavaModule {
    public RNConfig(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @Override
    public String getName() {
        return "RNConfig";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("buildEnvironment", BuildConfig.BUILD_ENV);
        return constants;
    }
}
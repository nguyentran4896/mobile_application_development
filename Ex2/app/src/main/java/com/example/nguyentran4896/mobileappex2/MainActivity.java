package com.example.nguyentran4896.mobileappex2;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;

import java.util.HashMap;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //get the spinner from the xml.
        final Spinner dropdown1 = findViewById(R.id.spinner1);
        final Spinner dropdown2 = findViewById(R.id.spinner2);
        final EditText moneyInput = findViewById(R.id.moneyInput);
        //create a list of items for the spinner.
        String[] items = new String[]{"AUD", "CAD", "EUR", "JPY", "USD", "VND"};
        Integer[] tiGias= new Integer[]{17594, 18069, 28137, 212, 22810, 1};

        final HashMap<String,Integer> spinnerMap = new HashMap<String, Integer>();
        for (int i = 0; i < 6; i++)
        {
            spinnerMap.put(items[i], tiGias[i]);
        }

        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, items);
        //set the spinners adapter to the previously created one.
        dropdown1.setAdapter(adapter);
        dropdown2.setAdapter(adapter);


        Button okBtn = findViewById(R.id.okBtn);
        okBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String money1 = dropdown1.getSelectedItem().toString();
                String money2 = dropdown2.getSelectedItem().toString();
                Integer input = Integer.parseInt(moneyInput.getText().toString());

                Integer tiGia1 = spinnerMap.get(money1);
                Integer tiGia2 = spinnerMap.get(money2);

                //Float result = input * tiGia1 / tiGia2;

                Log.e("logee", spinnerMap.get(money1).toString());
                Log.e("input", input.toString());
            }
        });
    }
}

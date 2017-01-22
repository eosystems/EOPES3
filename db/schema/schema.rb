create_table 'schema_migrations', collate: 'utf8_bin', comment: '' do |t|
  t.varchar 'version'

  t.index 'version', name: 'unique_schema_migrations', unique: true
end

create_table "estimates", collate: "utf8_bin", comment: "" do |t|
  t.int "id", primary_key: true, extra: "auto_increment"
  t.int "product_type_id", null: true
  t.decimal "unit_sell_price", null: true, precision: 20, scale: 4
  t.decimal "sell_price", null: true, precision: 20, scale: 4
  t.decimal "profit", null: true, precision: 20, scale: 4
  t.decimal "cost", null: true, precision: 20, scale: 4
  t.int "amount", null: true
  t.decimal "volume", null: true, precision: 20, scale: 4
  t.int "production_time", null: true
  t.int "user_id", null: true
  t.datetime "created_at", null: true
  t.datetime "updated_at", null: true
end


create_table :users, collate: "utf8_bin" do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.varchar :uid
  t.varchar :provider, null: false, default: "eve_online"
  t.varchar :encrypted_password, null: false, default: ""

  ## Recoverable
  t.varchar   :reset_password_token, null: true, default: ""
  t.datetime :reset_password_sent_at, null: true

  ## Rememberable
  t.datetime :remember_created_at, null: true

  ## Trackable
  t.int  :sign_in_count, default: 0, null: false
  t.datetime :current_sign_in_at, null: true
  t.datetime :last_sign_in_at, null: true
  t.varchar   :current_sign_in_ip, default: ""
  t.varchar   :last_sign_in_ip, default:""

  # Confirmable
  t.varchar   :confirmation_token, null: true
  t.datetime :confirmed_at, null: true
  t.datetime :confirmation_sent_at, null: true
  t.varchar   :unconfirmed_email,null: true # Only if using reconfirmable

  ## User Info
  t.varchar :name, null: true
  t.varchar :nickname, null: true
  t.varchar :image, null: true
  t.varchar :email, null: true

  ## Tokens
  t.text :tokens

  t.datetime :created_at
  t.datetime :updated_at
end


create_table :ar_internal_metadata, collate: :utf8_bin do |t|
  t.varchar :key
  t.varchar :value
end

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "estimates", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=COMPACT" do |t|
    t.integer  "product_type_id"
    t.decimal  "unit_sell_price", precision: 20, scale: 4
    t.decimal  "sell_price",      precision: 20, scale: 4
    t.decimal  "profit",          precision: 20, scale: 4
    t.decimal  "cost",            precision: 20, scale: 4
    t.integer  "amount"
    t.decimal  "volume",          precision: 20, scale: 4
    t.integer  "production_time"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=COMPACT" do |t|
    t.string   "uid",                                                         null: false
    t.string   "provider",                             default: "eve_online", null: false
    t.string   "encrypted_password",                   default: "",           null: false
    t.string   "reset_password_token",                 default: ""
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                        default: 0,            null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",                   default: "",           null: false
    t.string   "last_sign_in_ip",                      default: "",           null: false
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "name"
    t.string   "nickname"
    t.string   "image"
    t.string   "email"
    t.text     "tokens",                 limit: 65535,                        null: false
    t.datetime "created_at",                                                  null: false
    t.datetime "updated_at",                                                  null: false
  end

end

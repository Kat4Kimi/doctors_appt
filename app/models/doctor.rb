class Doctor < ApplicationRecord
	has_many :appointments, dependent :destroy
	has_many :patients, through: :appointments
	validates :first_name, :last_name, presence: true 
end

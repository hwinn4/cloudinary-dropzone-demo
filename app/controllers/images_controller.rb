class ImagesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def new
    @image = Image.new
  end

  def create
    cloudinary_file = Cloudinary::Uploader.upload(params[:file].path)
    cloudinary_image_id = cloudinary_file["public_id"]

    @image = Image.new
    @image.image_id = cloudinary_image_id
    @image.save

    render json: {new_image_id: @image.id}
  end

  def show
    @image = Image.find(params[:id])
  end

  def index

  end

end

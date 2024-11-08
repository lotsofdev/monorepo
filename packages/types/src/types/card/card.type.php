<?php

namespace Lotsof\Types;

class CardType extends \Lotsof\Types\BaseType
{
    public static function mock(\Lotsof\Types\BodyType $body = null, \Lotsof\Types\ImageType $image = null, \Lotsof\Types\VideoType $video = null, ?string $areaFigure = null, ?string $areaBody = null, ?string $areaBeforeBody = null, ?string $areaAfterBody = null, ?string $id = null): CardType
    {
        $faker = \Faker\Factory::create();

        $isVideo = random_int(0, 1);

        if ($image === null) {
            $image = ImageType::mock();
            if ($isVideo) {
                $image = null;
            }
        }
        if ($video === null) {
            $video = VideoType::mock();
            if (!$isVideo) {
                $video = null;
            }
        }

        if ($body === null) {
            $body = BodyType::mock(
                titleLevel: 3
            );
        }

        if ($areaFigure === null && $faker->boolean()) {
            $areaFigure = "<div class=\"typo-h3\">areaFigure</div>";
        }

        if ($areaBeforeBody === null && $faker->boolean()) {
            $areaBeforeBody = "<p class=\"typo-p\">areaBeforeBody</p>";
        }
        if ($areaAfterBody === null && $faker->boolean()) {
            $areaAfterBody = "<p class=\"typo-p\">areaAfterBody</p>";
        }

        $card = new static(
            id: $id,
            body: $body,
            image: $image,
            video: $video,
            areaFigure: $areaFigure,
            areaBody: $areaBody,
            areaBeforeBody: $areaBeforeBody,
            areaAfterBody: $areaAfterBody
        );
        return $card;
    }

    protected ?\Lotsof\Types\BodyType $body;
    protected ?\Lotsof\Types\ImageType $image;
    protected ?\Lotsof\Types\VideoType $video;
    protected ?string $areaFigure = null;
    protected ?string $areaBody = null;
    protected ?string $areaBeforeBody = null;
    protected ?string $areaAfterBody = null;

    public function __construct(?\Lotsof\Types\BodyType $body = null, ?\Lotsof\Types\ImageType $image = null, ?\Lotsof\Types\VideoType $video = null, ?string $areaFigure = null, ?string $areaBody = null, ?string $areaBeforeBody = null, ?string $areaAfterBody = null, ?string $id = null)
    {
        parent::__construct($id);
        $this->body = $body;
        $this->image = $image;
        $this->video = $video;
        $this->areaFigure = $areaFigure;
        $this->areaBody = $areaBody;
        $this->areaBeforeBody = $areaBeforeBody;
        $this->areaAfterBody = $areaAfterBody;
    }
}
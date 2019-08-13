;; -*- mode: Gimp; -*-

(define 
  (script-fu-halve-resolution original halve-x halve-y)
  (let* 
    (
      (original-width (car (gimp-image-width original)))
      (original-height (car (gimp-image-height original)))
      (scaled-width (cond ((= TRUE halve-x) (/ original-width 2)) (else original-width)))
      (scaled-height (cond ((= TRUE halve-y) (/ original-height 2)) (else original-height)))
    )
    (gimp-context-set-interpolation INTERPOLATION-NONE)
    (gimp-image-scale original scaled-width scaled-height)
    (gimp-image-scale original original-width original-height)
  )
)

(script-fu-register "script-fu-halve-resolution"
                    _"Halve the resolution"
                    _"Halve the resolution"
                    "Andrew Olsen"
                    "Andrew Olsen"
                    "2018-09-01"
                    ""
                    SF-IMAGE "Image" 1
                    SF-TOGGLE _"Halve horizontal resolution" TRUE
                    SF-TOGGLE _"Halve vertical resolution" FALSE)

(script-fu-menu-register "script-fu-halve-resolution"
                         _"<Image>/Filters/Sierra") 

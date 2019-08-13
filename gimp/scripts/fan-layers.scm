;; -*- mode: Gimp; -*-

(define 
  (script-fu-fan-layers original halve-x halve-y display-result save-to-png use-defaults)
  (let* 
    (
      (original-name (car (gimp-image-get-filename original)))
      (original-basename (car (strbreakup original-name ".")))
      (result-filename (string-append original-basename ".png"))
      (original-width (car (gimp-image-width original)))
      (original-height (car (gimp-image-height original)))
      (scaled-width (cond ((= TRUE halve-x) (/ original-width 2)) (else original-width)))
      (scaled-height (cond ((= TRUE halve-y) (/ original-height 2)) (else original-height)))
      (result (car (gimp-image-duplicate original)))
      (layers-struct (gimp-image-get-layers result))
      (num-layers (car layers-struct))
      (layers-vector (cadr layers-struct))
      (result-width (* scaled-width num-layers))
      (result-height scaled-height)
      (layer-id (- num-layers 1))
      (layer-ref 0)
      (layer-offset 0)
    )
    (gimp-context-set-interpolation INTERPOLATION-NONE)
    (gimp-image-scale result scaled-width scaled-height)
    (gimp-image-resize result result-width result-height 0 0)
    (while (>= layer-id 0)
      (begin
        (set! layer-ref (aref layers-vector layer-id))
        (gimp-item-set-visible layer-ref TRUE)
        (gimp-layer-set-opacity layer-ref 100)
        (gimp-layer-translate layer-ref layer-offset 0)
        (set! layer-offset (+ layer-offset scaled-width))
        (set! layer-id (- layer-id 1))
      )
    )
    (gimp-image-merge-visible-layers result CLIP-TO-IMAGE)
    (set! layer-ref (aref (cadr (gimp-image-get-layers result)) 0))
    (gimp-layer-resize-to-image-size layer-ref)
    (cond 
      ((= TRUE save-to-png)
        (file-png-save
          use-defaults
          result
          layer-ref  
          result-filename
          result-filename
          TRUE 9 FALSE TRUE FALSE FALSE TRUE
        )
      )
    )
    (cond 
      ((= TRUE display-result) (gimp-display-new result))
      (else (gimp-image-delete result))
    )
  )
)

(script-fu-register "script-fu-fan-layers"
                    _"Fan out layers side by side"
                    _"Fan out layers side by side"
                    "Andrew Olsen"
                    "Andrew Olsen"
                    "2018-09-01"
                    ""
                    SF-IMAGE "Image" 1
                    SF-TOGGLE _"Halve horizontal resolution" TRUE
                    SF-TOGGLE _"Halve vertical resolution" FALSE
                    SF-TOGGLE _"Display result" TRUE
                    SF-TOGGLE _"Save to PNG" TRUE
                    SF-TOGGLE _"Save using defaults" TRUE)


(script-fu-menu-register "script-fu-fan-layers"
                         _"<Image>/Filters/Sierra") 

